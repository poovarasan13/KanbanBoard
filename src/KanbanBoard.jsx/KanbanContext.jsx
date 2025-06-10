import React, { createContext, useReducer, useMemo } from 'react';

export const KanbanContext = createContext();

const initialState = {
  todo: [
   
  ],
  inProgress: [],
  done: [],
  dragged: null
};

function kanbanReducer(state, action) {
  switch (action.type) {
    case 'SET_DRAGGED':
      return { ...state, dragged: action.payload };

    case 'MOVE_CARD': {
      const { card, from, to } = action.payload;
      if (!card || from === to) return state;
      return {
        ...state,
        [from]: state[from].filter(c => c.id !== card.id),
        [to]: [...state[to], card],
        dragged: null
      };
    }

    case 'ADD_TASK': {
      const newCard = {
        id: Date.now().toString(),
        text: action.payload
      };
      return {
        ...state,
        todo: [...state.todo, newCard]
      };
    }

    case 'EDIT_TASK':
      return {
        ...state,
        [action.payload.from]: state[action.payload.from].map(card =>
          card.id === action.payload.id ? { ...card, text: action.payload.text } : card
        ),
      };

    case 'DELETE_CARD': {
      const { cardId, from } = action.payload;
      return {
        ...state,
        [from]: state[from].filter(card => card.id !== cardId)
      };
    }

    case 'REORDER_CARD': {
      const { from, fromIndex, toIndex } = action.payload;
      // Removed the useless safety check if (from !== from)
      const columnCards = [...state[from]];
      const [movedCard] = columnCards.splice(fromIndex, 1);
      columnCards.splice(toIndex, 0, movedCard);
      return { ...state, [from]: columnCards };
    }

    case 'MOVE_CARD_AT_INDEX': {
      const { card, from, to, toIndex } = action.payload;
      const sourceCards = [...state[from]].filter((c) => c.id !== card.id);
      const destCards = [...state[to]];
      destCards.splice(toIndex, 0, card);

      return {
        ...state,
        [from]: sourceCards,
        [to]: destCards,
      };
    }

    default:
      return state;
  }
}


export function KanbanProvider({ children }) {
  const [state, dispatch] = useReducer(kanbanReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <KanbanContext.Provider value={value}>
      {children}
    </KanbanContext.Provider>
  );
}
