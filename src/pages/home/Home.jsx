import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import "./home.css"
export default function Home() {

  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(()=>{
    setIsFetching(true)
    const fetchPosts = async ()=>{
      const res = await axios.get(`https://1001devs.arabickitchenis.life/api/posts`)
      setPosts(res?.data)
    setIsFetching(false)
      
    }
    fetchPosts()
  },[])
  return (
      <div className='home'>
      
      <Header />
      {isFetching ? <div className='container'>  <img src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-3.gif" alt="Loading" /></div>: <Posts posts={posts} />}
     
      </div>
  )
}
