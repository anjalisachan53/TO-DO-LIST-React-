import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
  const toggleTask = (id) => setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  const editTask = (id, newText) => setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <div className="container">
      <div className="app-box">
        <h1>To-Do List</h1>
        <TaskForm addTask={addTask} />
        <Filter filter={filter} setFilter={setFilter} />
        <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} />
      </div>
    </div>
  );
}

export default App;