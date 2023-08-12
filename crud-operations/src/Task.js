import React from 'react';


export default function Task(props) {
    return (
        <div
            className='task'
            style={{ backgroundColor: props.completed ? "green" : "white" }}
        >
            <div>{props.taskName}</div>
            <button onClick={() => props.completeTask(props.id)}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}