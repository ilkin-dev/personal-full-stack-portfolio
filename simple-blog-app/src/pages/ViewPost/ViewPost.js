import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the third post.' },
];

const ViewPost = () => {
    const { id } = useParams(); // Get the post ID from the URL
    const post = posts.find((p) => p.id === parseInt(id)); // Find the post by ID

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default ViewPost