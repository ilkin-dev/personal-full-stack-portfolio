import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../../context/TaskContext';

const ViewTask = () => {
    const { id } = useParams();
    const { tasks } = useContext(TaskContext);
    const task = tasks.find((t) => t._id === id);

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
    );
};

export default ViewTask