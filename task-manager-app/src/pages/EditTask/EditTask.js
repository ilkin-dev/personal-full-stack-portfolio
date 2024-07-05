import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../../context/TaskContext';

const EditTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, updateTask } = useContext(TaskContext);
    const task = tasks.find((t) => t.id === parseInt(id));

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(task.id, { id: task.id, title, description, completed: task.completed });
        navigate('/');
    };

    return (
        <div>
            <h1>Edit Task</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Update Task</button>
            </form>
        </div>
    );
}

export default EditTask