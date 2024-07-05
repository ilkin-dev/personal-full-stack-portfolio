import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

const initialTasks = [
    { id: 1, title: 'First Task', description: 'This is the first task.', completed: false },
    { id: 2, title: 'Second Task', description: 'This is the second task.', completed: false },
];

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (title, description) => {
        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
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
