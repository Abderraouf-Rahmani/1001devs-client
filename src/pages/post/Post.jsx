import React from "react";
import { useParams } from "react-router-dom";
import "./post.css"

export default function Post() {
  const postId = useParams();
  return (
    <div className="post">
      <div className="container">
        
        <div className="post-header">
          <div className="post-details">
            <div className="post-tag">CSS</div>
            <div className="post-date">Aug, 31</div>
          </div>
          <div className="post-title">{postId.id}</div>
        </div>

          <div className="post-content">
            <h2>You know it!</h2>
              <p>here's complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart.</p>
          </div>

        
      </div>
    </div>
  )
}