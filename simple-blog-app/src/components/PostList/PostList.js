import React from 'react'

// Dummy data for posts (to be replaced with state later)
const posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the third post.' },
];

const PostList = () => {
    return (
        <div>
            <h2>Blog Post</h2>
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