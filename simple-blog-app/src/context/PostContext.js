import React, { createContext, useState } from 'react';

export const PostContext = createContext();

const initialPosts = [
    { id: 1, title: 'First Post', content: 'This is first post.' },
    { id: 2, title: 'Second Post', content: 'This is second post.' },
    { id: 3, title: 'Third Post', content: 'This is third post.' },
];

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState(initialPosts);

    const addPost = (title, content) => {
        const newPost = {
            id: posts.length + 1,
            title,
            content,
        };
        setPosts([...posts, newPost]);
    };

    const updatePost = (id, updatedPost) => {
        setPosts(posts.map(post => (post.id === id ? updatedPost : post)));
    };

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <PostContext.Provider value={
            {
                posts,
                addPost,
                updatePost,
                deletePost
            }}>
            {children}
        </PostContext.Provider>
    )
}