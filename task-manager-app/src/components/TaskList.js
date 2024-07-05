import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const TaskList = () => {
    const { tasks, deleteTask, toggleTaskCompletion } = useContext(TaskContext);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button onClick={() => toggleTaskCompletion(task._id)}>
                            {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                        </button>
                        <Link to={`/edit/${task._id}`}>Edit</Link>
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;