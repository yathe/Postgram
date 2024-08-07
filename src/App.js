// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from './Components/PostForm';
import Card from './Components/Card';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('user')) || [];
    setPosts(storedPosts);
  }, []);

  const addPosts = (data) => {
    const newPost = { ...data, id: Date.now(), likes: 0 };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('user', JSON.stringify(updatedPosts));
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('user', JSON.stringify(updatedPosts));
  };

  const likePost = (id) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('user', JSON.stringify(updatedPosts));
  };

  return (
    <div className="container">
      <PostForm addPosts={addPosts} />
      <div className="row">
        {posts.map((post, index) => (
          <div className="col-md-4" key={index}>
            <Card post={post} onDelete={deletePost} onLike={likePost} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
