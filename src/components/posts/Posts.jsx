import React from "react";
import "./posts.css";
import Postcard from "../postcard/Postcard";
import Button from "../button/Button";

export default function Posts({posts}) {
  return (
    <div className="posts">
      <div className="container">
        <div className="posts-filters">
          <div className="post-filter chosen">Recent Posts</div>
        </div>
        <div className="post-cards-container">
          {posts?.map(p=>(
            <Postcard key={p._id + Math.random()} post={p} />
          ))}
        </div>
        <div className="rm-container">
          <Button text='Read More >' targetLink='explore' />
        </div> 
      </div>
    </div>
  );
}
