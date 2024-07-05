import React, { useContext } from 'react';
import { PostContext } from '../../context/PostContext';
import { Link } from 'react-router-dom';

const PostList = () => {
    const { posts, deletePost } = useContext(PostContext);

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <Link to={`/view/${post.id}`}>View</Link>
                        <Link to={`/edit/${post.id}`}>Edit</Link>
                        <button onClick={() => deletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList