// Components/PostForm.js
import React, { useState } from 'react';

const PostForm = ({ addPosts }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body, image };
    addPosts(post);
    setTitle('');
    setBody('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Body</label>
        <textarea
          className="form-control"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input
          type="text"
          className="form-control"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Add Post</button>
    </form>
  );
};

export default PostForm;
