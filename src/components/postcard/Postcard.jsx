import React from "react";
import { Link } from "react-router-dom";
import "./postcard.css";
export default function Postcard({post}) {
 return (
    <Link to={`/read/${post._id}`} >
      <div className="post-card">
        <div className="card-header">
          <div className="card-title">
              {post.categories.map(c  =>(
                <span key={c} className="search-tag">#{c}</span>
              ))}
          </div>
          <div className="card-date">{`${Notification}`}</div>
        </div>
        <div className="card-desc-container">
          <div className="card-desc">{post.title}</div>
        </div>
      </div>
    </Link>
  );
}
