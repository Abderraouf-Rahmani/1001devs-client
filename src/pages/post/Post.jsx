import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./post.css"
import PostContent from "./PostContent";


export default function Post() {
  const postId = useParams();
  const GET_POST_URL = `/posts/read/${postId.id}/`
  const [thePost, setThePost] = useState(undefined)
  const [isFetching, setIsFetching] = useState(false)
  let post;
  
  useEffect(()=>{
    setIsFetching(true)
    const getPost = ()=>{
      axios
    .get(GET_POST_URL)
    .then((res)=>{
    const postData = res.data;
    post = postData
    setThePost(post)
    console.log(post)
  })
  .catch((err)=>{
    console.log(err)
  })
  .finally(()=>{
    setIsFetching(false)
  })
    }
    getPost()
},[])

  if(isFetching) {
    return <h1>Loading...</h1>
  }

  return (
    
    thePost?.map((p)=>(
      

        <PostContent details={p} />
        
      
    
            )
             ))
            
            
            
          }