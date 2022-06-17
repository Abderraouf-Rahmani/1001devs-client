import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { data } from "../write/data";
import "./post.css"
import { useCallback } from "react";
const edjsHTML = require("editorjs-html");

const edjsParser = edjsHTML();



export default function Post() {
  const postTitle = useParams();
  const GET_POST_URL = `/posts/read/${postTitle.title}/`
  const [post, setPost] = useState(undefined)

  useEffect(()=>{axios
    .get(GET_POST_URL)
    .then((res)=>{
    const postData = res.data;
    setPost(postData)
    console.log(post)
  })
  .catch((err)=>{
    console.log(err)
  })
  }
    
   
  ,[])
  
 

  return (
    
    post?.map((p, i)=>(

      <div key={p._id} className="post" >
      <div className="container">
        
        <div className="post-header">
          <div className="post-details">
            <div className="post-tag">{p.categories[0]}</div>
            <div className="post-date">{p.createdAt}</div>
          </div>
          <div className="post-title">{p.title}</div>
        </div>

          <div className="post-content" id="post-content">{JSON.stringify(p.desc)}</div>

        
      </div>
    </div>
            ))
            )
            
            
          }