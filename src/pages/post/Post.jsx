import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./post.css"
import PostContent from "./PostContent";
import { Context } from "../../context/Context";
import formatDate from "../../util/toFormatedDate";
import DeleteBtn from "../../components/deleteButton/DeleteBtn";
import Pic from '../../components/pic/Pic.jsx'


export default function Post() {
  const {user} = useContext(Context)

  const [isLoading, setIsLoading] = useState(true)
  const postId = useParams();
  const GET_POST_URL = `https://1001devs.arabickitchenis.life/api/posts/read/${postId.id}/`
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

  if(isLoading) {
    return <img src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-3.gif" alt="Loading" />
  }


  
if(!isLoading) return (
    
    [post].map((p)=>(
      <div key={p._id} className="post" >
      <div className="container">
        <div className="post-header">
          <div className="post-infos">
            <div className="post-owner-infos">
                <Link to={`/${p.userid}`}>
              <div className="post-owner-pic">
                <Pic username={p.username} />
              </div>
                </Link>
              <div>
                <Link to={`/${p.userid}`}>
                <div className="post-owner-name">{p.username}</div>
                </Link>
                <div className="post-date">{'posted on ' + formatDate(p.createdAt)}</div>
              </div>
            </div>
          </div>
            {(user && user.username === p.username) && <>
              <div className="owner-actions">
                <Link to={`/write?edit=${p._id}`}>
                  <span className="edit-btn">Edit</span>
                </Link>
                <DeleteBtn postid={p._id} postTitle={p.title}/>
              </div>
            </>}
        </div>
          <div>
            <div className="post-title">{p.title}</div>
            <div className="post-tag">
            {p.categories.map(c  =>(
              <Link key={c} to={`/search?search=${c}`}>
              <span className="search-tag">#{c}</span>
              </Link>
            ))}
            
            </div>
          </div>

        <PostContent details={p} />
        
      
    
            </div></div>
        )
        ))
            }