import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import "./home.css"
export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get('/posts')
      setPosts(res?.data)
    }
    fetchPosts()
  },[])
  return (
      <div className='home'>
      
      <Header />
      <Posts posts={posts} />
     
      </div>
  )
}
