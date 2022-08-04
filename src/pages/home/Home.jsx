import React, { useState, useEffect } from 'react'
import axios from "axios"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import "./home.css"
export default function Home() {
const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    setIsLoading(true)
    const fetchPosts = async ()=>{
      const res = await axios.get(`https://1001devs.arabickitchenis.life/api/posts?limit=${8}`)
      setPosts(res?.data)
      setIsLoading(false)
    }
    fetchPosts()
  },[]) 
  return (
      <div className='home'>
      
      <Header />
      { isLoading ? <div className="loading-img-container"><img className='loading-img' src="https://cdn.dribbble.com/users/60266/screenshots/17432450/media/e55027639773904b3490a6f2d80ae813.gif" alt="loading" /></div> :<Posts posts={posts} />  }
     
      </div>
  )
}
