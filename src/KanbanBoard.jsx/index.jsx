import React, { useContext, useState, useEffect, useRef } from 'react';
import { KanbanContext } from './KanbanContext';
import TaskInput from './TaskInput';
import TrashDropZone from './TrashDropZone';
import './KanbanBoard.css';

function Card({ card, from, index }) {
  const { dispatch } = useContext(KanbanContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(card.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const saveEdit = () => {
    const trimmed = editText.trim();
    if (trimmed === '') {
      setEditText(card.text);
    } else if (trimmed !== card.text) {
      dispatch({ type: 'EDIT_TASK', payload: { id: card.id, from, text: trimmed } });
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      saveEdit();
    } else if (e.key === 'Escape') {
      setEditText(card.text);
      setIsEditing(false);
    }
  };

  const dragStart = (e) => {
    e.dataTransfer.setData('card', JSON.stringify({ card, from, index }));
  };

  const handleDropOnCard = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('card'));
    if (data.card.id === card.id) return;
    if (data.from === from) {
      dispatch({ type: 'REORDER_CARD', payload: { from, fromIndex: data.index, toIndex: index } });
    } else {
      dispatch({ type: 'MOVE_CARD_AT_INDEX', payload: { card: data.card, from: data.from, to: from, toIndex: index } });
    }
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div
      className="card"
      draggable
      onDragStart={dragStart}
      onDrop={handleDropOnCard}
      onDragOver={allowDrop}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={handleKeyDown}
          className="edit-input"
        />
      ) : (
        <div onClick={() => setIsEditing(true)} style={{ cursor: 'pointer' }}>
          {card.text}
        </div>
      )}
    </div>
  );
}

function Column({ title, cards, from }) {
  const { dispatch } = useContext(KanbanContext);

  const handleDropOnColumn = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('card'));
    if (data.from === from) {
      if (data.index !== cards.length - 1) {
        dispatch({ type: 'REORDER_CARD', payload: { from, fromIndex: data.index, toIndex: cards.length - 1 } });
      }
    } else {
      dispatch({ type: 'MOVE_CARD_AT_INDEX', payload: { card: data.card, from: data.from, to: from, toIndex: cards.length } });
    }
  };

  const handleDropAtStart = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('card'));
    if (data.from === from) {
      if (data.index !== 0) {
        dispatch({ type: 'REORDER_CARD', payload: { from, fromIndex: data.index, toIndex: 0 } });
      }
    } else {
      dispatch({ type: 'MOVE_CARD_AT_INDEX', payload: { card: data.card, from: data.from, to: from, toIndex: 0 } });
    }
  };

  return (
    <div className={`column column-${from}`} onDragOver={(e) => e.preventDefault()} onDrop={handleDropOnColumn}>
      <h2>{title}</h2>
      <div style={{ height: 10, marginBottom: 5, backgroundColor: 'transparent' }} onDragOver={(e) => e.preventDefault()} onDrop={handleDropAtStart} />
      {cards.map((card, index) => (
        <Card key={card.id} card={card} from={from} index={index} />
      ))}
    </div>
  );
}

export default function KanbanBoard() {
  const { state, dispatch } = useContext(KanbanContext);
  const [modalData, setModalData] = useState(null);

  const handleCardDrop = (data) => {
    setModalData(data);
  };

  const handleConfirmDelete = () => {
    if (modalData) {
      dispatch({ type: 'DELETE_CARD', payload: { cardId: modalData.card.id, from: modalData.from } });
      setModalData(null);
    }
  };

  return (
    <>
      <h1 className="title">Kanban Board</h1>
      <TaskInput />
      <div className="board">
        <Column title="To Do" cards={state.todo} from="todo" />
        <Column title="In Progress" cards={state.inProgress} from="inProgress" />
        <Column title="Done" cards={state.done} from="done" />
        <TrashDropZone onCardDrop={handleCardDrop} />
      </div>
      {modalData && (
        <div className="modal-overlay">
          <div className="modal">
            <p>
              Are you sure you want to delete: <strong>{modalData.card.text}</strong>?
            </p>
            <div className="modal-buttons">
              <button className="delete-btn" onClick={handleConfirmDelete}>Yes, Delete</button>
              <button className="cancel-btn" onClick={() => setModalData(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
