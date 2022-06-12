import React from "react";
import { Link } from "react-router-dom";
import "./postcard.css";
export default function Postcard({post}) {
  const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let day = new Date(post.createdAt).getDate().toString()
  let month = new Date(post.createdAt).getMonth().toString()
  let year = new Date(post.createdAt).getUTCFullYear().toString() === new Date().getFullYear().toString() ? '': new Date(post.createdAt).getUTCFullYear().toString()
  return (
    <Link to={`/read/${post.title.split(' ').join('-')}`} >
      <div className="post-card">
        <div className="card-header">
          <div className="card-title">{post.categories[0]}</div>
          <div className="card-date">{`${day}, ${monthShort[parseInt(month)]} ${year}`}</div>
        </div>
        <div className="card-desc-container">
          <div className="card-desc">{post.title}</div>
        </div>
      </div>
    </Link>
  );
}
