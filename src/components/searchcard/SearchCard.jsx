import React from 'react'
import './searchcard.css'
import image from '../../img/Troll-face.png'
import formatDate from '../../util/toFormatedDate'
import { Link } from 'react-router-dom'
export default function SearchCard({title, username, categories, t, id}) {
  return (
    <div className="search-card">
        <div className="search-card-header">
            <div className="author">
                <img src={image} alt="author" className='author-pic'/>
            </div>
            <div className="author-infos">
                <div className="author-name">{username}</div>
                <div className="post-date">{formatDate(t)}</div>
            </div>
        </div>
        <div className="search-card-content">
          <h1 className="search-card-title">
          <Link to={`/read/${id}`} >

            {title}
          </Link>

          </h1>
          <div className="search-card-tags">
            {categories.map(c  =>(
              <span className="search-tag">#{c}</span>

            ))}
            
          </div>
        </div>

    </div>
  )
}
