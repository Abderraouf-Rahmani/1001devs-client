import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchBar from '../../components/searchbar/SearchBar'
import SearchCard from '../../components/searchcard/SearchCard'
import './search.css'

export default function Search() {
  const queryParams =new URLSearchParams(window.location.search)
  let searchString = queryParams.get("search")
  const location = useLocation();
  const [isFetching, setIsFetching] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async ()=>{
      setIsFetching(true)
      let res;
      if (searchString){

         res = await axios.get(`https://backend1001.vercel.app/api/posts/search/${searchString}`)
      }else{
         res = await axios.get('https://backend1001.vercel.app/api/posts')
      }
      
      setPosts(res?.data) 
      setIsFetching(false)
        
    }
    fetchPosts()
  },[searchString])

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="search-bar">
          {location.pathname === '/search' && <SearchBar />}
          
        </div>

          {location.pathname === '/explore' ? (<><h3 className="search-string">Explore</h3></>) : (<><h3 className="search-string">Search results for "{searchString}" </h3></>)}
            
            
        </div>
        <div className="search-container">
          {isFetching && <div className='container'>  <img src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-3.gif" alt="Loading" /></div> }
           {(posts.length === 0 && !isFetching) &&<> <div>No results match that query</div> <img src='https://cdni.iconscout.com/illustration/premium/thumb/folder-is-empty-4064360-3363921.png' /> </>}
          
            {!isFetching && (posts.map(p=>(

            <SearchCard key={p._id + Math.random()} userid={p.userid} title={p.title} username={p.username} categories={p.categories} t={p.createdAt} id={p._id} />
            )))}
            
        </div>
    </div>
  )
}
