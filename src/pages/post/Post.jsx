import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../write/data";
import "./post.css"
const edjsHTML = require("editorjs-html");
const edjsParser = edjsHTML();

export default function Post() {
  const postTitle = useParams();
  const [fullpost, setFullPost] = useState(null);
  const [content, setContent] = useState(undefined)
  useEffect(()=>{
    const getPost = async () =>{
      const GET_POST_URL = `/posts/read/${postTitle.title}/`
      const post = await axios.get(GET_POST_URL)
      setFullPost(post && post?.data)
      const html = edjsParser.parse(data);
      setContent(html)
    }
    getPost()
  }, [])
  
  return (
    fullpost?.map((l, i)=>(
    
    <div className="post" key={i}>
      <div className="container">
        
        <div className="post-header">
          <div className="post-details">
            <div className="post-tag">CSS</div>
            <div className="post-date">{new Date(l?.createdAt).toDateString()}</div>
          </div>
          <div className="post-title">{l?.title}</div>
        </div>

          <div className="post-content">{content}</div>

        
      </div>
    </div>
            ))

  )
}