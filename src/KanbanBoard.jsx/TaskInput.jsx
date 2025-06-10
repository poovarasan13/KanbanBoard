import React, { useState, useContext } from 'react';
import { KanbanContext } from './KanbanContext';

export default function TaskInput() {
  const { state, dispatch } = useContext(KanbanContext); 
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return;
    const allTasks = [...state.todo, ...state.inProgress, ...state.done];
    const duplicate = allTasks.some(
      (task) => task.text.toLowerCase() === trimmedText.toLowerCase()
    );

    if (duplicate) {
      alert('Task already exists!');
      return;
    }

    dispatch({ type: 'ADD_TASK', payload: trimmedText });
    setText('');
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
