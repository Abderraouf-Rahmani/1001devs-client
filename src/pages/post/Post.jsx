import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./post.css"

export default function Post() {
  const postTitle = useParams();
  const [fullpost, setFullPost] = useState([]);

  useEffect(()=>{
    const getPost = async () =>{
      const GET_POST_URL = `/posts/read/${postTitle.title}/`
      const post = await axios.get(GET_POST_URL)
      console.log(GET_POST_URL)
      setFullPost(post.data)
    }
    getPost()
  }, [])
  
  return (
    fullpost.map(l=>(
    
    <div className="post">
      <div className="container">
        
        <div className="post-header">
          <div className="post-details">
            <div className="post-tag">CSS</div>
            <div className="post-date">{new Date(l.createdAt).toDateString()}</div>
          </div>
          <div className="post-title">{l.title}</div>
        </div>

          <div className="post-content">{l.desc}</div>

        
      </div>
    </div>
            ))

  )
}