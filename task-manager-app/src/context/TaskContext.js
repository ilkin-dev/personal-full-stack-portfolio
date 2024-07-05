import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    });

    const addTask = (title, description) => {
        axios.post('http://localhost:5000/tasks', { title, description })
            .then(response => setTasks([...tasks, response.data]))
            .catch(error => console.error(error));
    };

    const updateTask = (id, updatedTask) => {
        axios.put(`http://localhost:5000/tasks/${id}`, updatedTask)
            .then(response => {
                setTasks(tasks.map(task => (task._id === id ? response.data : task)));
            })
            .catch(error => console.error(error));
    };

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then(() => {
                setTasks(tasks.filter(task => task._id !== id));
            })
            .catch(error => console.error(error));
    };

    const toggleTaskCompletion = (id) => {
        const task = tasks.find(task => task._id === id);
        const updatedTask = { ...task, completed: !task.completed };
        updateTask(id, updatedTask);
    };

    return (
        <TaskContext.Provider value={
            {
                tasks,
                addTask,
                updateTask,
                deleteTask,
                toggleTaskCompletion
            }}>
            {children}
        </TaskContext.Provider>
    );
};
