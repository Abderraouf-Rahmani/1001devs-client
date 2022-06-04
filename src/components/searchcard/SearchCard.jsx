import React from 'react'
import './searchcard.css'
import image from '../../img/Troll-face.png'
export default function SearchCard() {
  return (
    <div className="search-card">
        <div className="search-card-header">
            <div className="author">
                <img src={image} alt="author" className='author-pic'/>
            </div>
            <div className="author-infos">
                <div className="author-name">Abderraouf Rahmani</div>
                <div className="post-date">Aug, 31</div>
            </div>
        </div>
        <div className="search-card-content">
          <h1 className="search-card-title">You Suck at CSS FlexBox, Hear Me Out!</h1>
          <div className="search-card-tags">
            <span className="search-tag">#CSS</span>
            <span className="search-tag">#HTML</span>
            <span className="search-tag">#1001</span>
            <span className="search-tag">#DEVs</span>
          </div>
        </div>

    </div>
  )
}
