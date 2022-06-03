import React from "react";
import "./posts.css";
import Postcard from "../postcard/Postcard";

export default function Posts() {
  return (
    <div className="posts">
      <div className="container">
        <div className="posts-filters">
          <div className="post-filter chosen">Relevant</div>
          <div className="post-filter">Latest</div>
          <div className="post-filter">Top</div>
        </div>
        <div className="post-cards-container">
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
        </div>
      </div>
    </div>
  );
}
