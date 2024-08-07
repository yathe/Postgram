// Components/Card.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

const Card = ({ post, onDelete, onLike }) => {
  return (
    <div className="card mt-5 mb-3">
      <img src={post.image} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button onClick={() => onLike(post.id)} className="btn btn-primary">
            Like {post.likes}
          </button>
          <button onClick={() => onDelete(post.id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
