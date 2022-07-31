import React, {useContext} from 'react'
import './searchcard.css'
import image from '../../img/Troll-face.png'
import Pic from '../pic/Pic.jsx'
import formatDate from '../../util/toFormatedDate'
import { Link, useLocation } from 'react-router-dom'
import { Context } from "../../context/Context";
import DeleteBtn from '../deleteButton/DeleteBtn'


export default function SearchCard({title, username, categories, t, id, userid}) {
  const {user} = useContext(Context)
  const location = useLocation();

  return (
    <div className="search-card">
        <div className="search-card-header">
          <Link to={`/${userid}`}>
            <div className="author">
                <Pic username={username} />
            </div>
          </Link>

            <div className="author-infos">
              <Link to={`/${userid}`}>
                <div className="author-name">{username}</div>
              </Link>
              <div className="post-date">{formatDate(t)}</div>
            </div>
        </div>
        <div className="search-card-content">
          <h1 className="search-card-title">
          <Link to={`/read/${id}`} >

            {title}
          </Link>

          </h1>
          <div className="sub-infos">
            <div className="search-card-tags">
              {categories.map(c  =>(
                <Link key={c} to={`/search?search=${c}`}>
                <span className="search-tag">#{c}</span>
                </Link> 
              ))}
            
            </div>
            {(user && user.username === username && (location.pathname !== '/search' && location.pathname !== '/explore' ) ) && <>
              <div className="owner-actions">
                <Link to={`/write?edit=${id}`}>
                  <span className="edit-btn">Edit</span>
                </Link>
                <DeleteBtn postid={id} postTitle={title} />
              </div>
            </>}
          </div>
        </div>

    </div>
  )
}
