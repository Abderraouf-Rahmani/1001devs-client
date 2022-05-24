import React from 'react'
import "./postcard.css";
export default function Postcard() {
  return (
    <div className="post-card">
        <div className="card-title">CSS</div>
        <div className="card-date">Aug, 31</div>
        <div className="card-desc-container">
          <div className="card-desc">You don't know FlexBox</div>  
        </div>
    </div>
  )
}
