import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({
      id: Date.now(),
      text,
      priority,
      dueDate,
      completed: false,
    });
    setText('');
    setPriority('Low');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new task..." />
      <div className="task-options">
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
