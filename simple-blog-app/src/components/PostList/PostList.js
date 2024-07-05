import React, { useContext } from 'react';
import { PostContext } from '../../context/PostContext';

const PostList = () => {
    // Use context to get posts
    const { posts } = useContext(PostContext);
    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList