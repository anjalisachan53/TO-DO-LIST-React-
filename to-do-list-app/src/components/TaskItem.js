import React, { useState } from 'react';

function TaskItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      {isEditing ? (
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} className="edit-input" />
      ) : (
        <span>{task.text} <small>({task.priority}, {task.dueDate || 'No date'})</small></span>
      )}
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
