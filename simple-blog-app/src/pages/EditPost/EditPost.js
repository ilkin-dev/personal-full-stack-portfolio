import React, { useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PostContext } from '../../context/PostContext';

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { posts, updatePost } = useContext(PostContext);
    const post = posts.find((p) => p.id === parseInt(id));

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePost(post.id, { id: post.id, title, content });
        navigate('/');  // Redirect to home page after updating
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
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default EditPost;
