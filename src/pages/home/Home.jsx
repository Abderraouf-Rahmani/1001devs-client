import React from 'react'

import Header from '../../components/header/Header'

import Posts from '../../components/posts/Posts'
import "./home.css"
export default function Home() {
  return (
      <div className='home'>
      
      <Header />
      <Posts />
     
      </div>
  )
}
