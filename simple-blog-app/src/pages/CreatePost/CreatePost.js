import React, { useState, useContext } from 'react';
import { PostContext } from '../../context/PostContext';
import { Link } from 'react-router-dom';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addPost } = useContext(PostContext); // Use context to get addPost function

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(title, content); // Add new post using context function
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <h1>Create Post</h1>
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
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Create Post</button>
            </form>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default CreatePost