import React from 'react';
import './Task.css';

function Task(props) {
  return (
    <div className={props.done ? "Task-done" : "Task-todo"} onClick={props.handleToggle}>
      {props.name}
    </div>
  );
}

export default Task;
