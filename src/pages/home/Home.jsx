import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Posts from '../../components/posts/Posts'
import "./home.css"
export default function Home() {
  return (
      <div className='home'>
      <Navbar />
      <Header />
      <Posts />
      <Footer />
      </div>
  )
}
