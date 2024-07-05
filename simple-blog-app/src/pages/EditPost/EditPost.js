import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../../context/PostContext';

const EditPost = () => {
    const { id } = useParams(); // Get the post ID from the URL
    const { posts, updatePost } = useContext(PostContext); // Use context to get posts and updatePost function
    const post = posts.find((p) => p.id === parseInt(id)); // Find the post by ID

    // State for managing form inputs
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        updatePost(post.id, { id: post.id, title, content }); // Update post using context function
    };

    return (
        <div>
            <h1>Edit Post</h1>
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
                <button type="submit">Update Post</button>
            </form>
        </div>
    )
}

export default EditPost