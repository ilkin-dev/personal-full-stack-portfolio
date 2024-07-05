import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostContext } from '../../context/PostContext';


const ViewPost = () => {
    const { id } = useParams();
    const { posts } = useContext(PostContext);
    const post = posts.find((p) => p.id === parseInt(id));

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default ViewPost