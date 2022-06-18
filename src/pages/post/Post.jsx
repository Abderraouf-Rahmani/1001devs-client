import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./post.css"
import PostContent from "./PostContent";


export default function Post() {
  const postTitle = useParams();
  const GET_POST_URL = `/posts/read/${postTitle.title}/`
  const [post, setPost] = useState(undefined)

  useEffect(()=>{axios
    .get(GET_POST_URL)
    .then((res)=>{
    const postData = res.data;
    setPost(postData)
    
  })
  .catch((err)=>{
    console.log(err)
  })
},[])


  return (
    
    post?.map((p, i)=>(
      <div key={p._id} className="post" >
      <div className="container">
        
        <div className="post-header">
          <div className="post-title">{p.title}</div>
          <div className="post-details">
            <div className="post-tag">{p.categories[0]}</div>
            <div className="post-date">{p.createdAt}</div>
          </div>
        </div>

        <PostContent desc={p.desc} />
        
      </div>
    </div>
            ))
            )
            
            
          }