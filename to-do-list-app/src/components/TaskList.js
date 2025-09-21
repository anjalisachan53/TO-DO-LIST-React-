import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? <p className="no-tasks">No tasks available</p> : 
        tasks.map(task => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} />
        ))
      }
    </div>
  );
}

export default TaskList;
