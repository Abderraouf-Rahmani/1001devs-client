import React from "react";
import { Link } from "react-router-dom";
import "./postcard.css";
export default function Postcard() {
  return (
    <Link to="read/learn-flexbox" style={{ textDecoration: "none" }}>
      <div className="post-card">
        <div className="card-header">
          <div className="card-title">CSS</div>
          <div className="card-date">Aug, 31</div>
        </div>
        <div className="card-desc-container">
          <div className="card-desc">You don't know FlexBox</div>
        </div>
      </div>
    </Link>
  );
}
