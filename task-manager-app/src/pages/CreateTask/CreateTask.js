import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../../context/TaskContext';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { addTask } = useContext(TaskContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title, description);
        navigate('/');
    };

    return (
        <div>
            <h1>Create Task</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <button type="submit">Create Task</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask