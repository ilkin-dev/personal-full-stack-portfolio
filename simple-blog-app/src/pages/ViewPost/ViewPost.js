import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../../context/PostContext';


const ViewPost = () => {
    const { id } = useParams(); // Get the post ID from the URL
    const { posts } = useContext(PostContext); // Use context to get posts
    const post = posts.find((p) => p.id === parseInt(id)); // Find the post by ID

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default ViewPost