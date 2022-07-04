import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./post.css"
import PostContent from "./PostContent";
import { Context } from "../../context/Context";
import formatDate from "../../util/toFormatedDate";


export default function Post() {
  const {user} = useContext(Context)

  const [isLoading, setIsLoading] = useState(true)
  const postId = useParams();
  const GET_POST_URL = `/posts/read/${postId.id}/`
  const [post, setPost] = useState(undefined)

  useEffect(()=>{
      const getPost = ()=>{
        setIsLoading(true)
        axios
        .get(GET_POST_URL)
        .then((res)=>{
        const postData = res.data;
        setPost(postData)
        setIsLoading(false)

      })
      .catch((err)=>{
        console.log(err)
      })
    }
    getPost()
},[])



  
if(!isLoading) return (
    
    [post].map((p)=>(
      <div key={p._id} className="post" >
      <div className="container">
        <div className="post-header">
          <div className="post-infos">
            <div className="post-owner-infos">
                <Link to={`/${p.username}`}>
              <div className="post-owner-pic">
                <img src="https://www.nicepng.com/png/detail/7-72350_cat-lol-l-cat-troll-face-png.png" alt="pic" />
              </div>
                </Link>
              <div>
                <Link to={`/${p.username}`}>
                <div className="post-owner-name">{p.username}</div>
                </Link>
                <div className="post-date">{'posted on ' + formatDate(p.createdAt)}</div>
              </div>
            </div>
          </div>
            {user.username === p.username && <>
              <div className="owner-actions">
                <Link to={`/write?edit=${p._id}`}>
                  <span className="edit-btn">Edit</span>
                </Link>
                <span  className="delete-btn">Delete</span>
              </div>
            </>}
        </div>
          <div>
            <div className="post-title">{p.title}</div>
            <div className="post-tag">{p.categories[0]}</div>
          </div>

        <PostContent desc={p.desc} />
        
      </div>
    </div>
            ))
            )
            
            
          }