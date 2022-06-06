import React from "react";
import "./posts.css";
import Postcard from "../postcard/Postcard";
import { Link } from "react-router-dom";
import Button from "../button/Button";

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
        <div className="rm-container">
          <Button text='Read More >' targetLink='explore' />
        </div> 
      </div>
    </div>
  );
}
