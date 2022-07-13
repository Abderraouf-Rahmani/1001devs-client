import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchBar from '../../components/searchbar/SearchBar'
import SearchCard from '../../components/searchcard/SearchCard'
import './search.css'

export default function Search() {
  const queryParams =new URLSearchParams(window.location.search)
  const searchString = queryParams.get("search")
  const location = useLocation();
  const [isFetching, setIsFetching] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async ()=>{
      setIsFetching(true)
      const res = await axios.get(`/posts/search/${searchString}`)
      setPosts(res?.data)
      setIsFetching(false)
        
    }
    fetchPosts()
  },[])
  if(!isFetching) {console.log(posts)}
  return (
    <div className="search-page">
      <div className="search-header">
        <div className="search-bar">
          {location.pathname === '/search' && <SearchBar />}
          
        </div>

      </div>
        <div className="search-header">
          {location.pathname === '/explore' ? (<><h3 className="search-string">Explore</h3></>) : (<><h3 className="search-string">Search results for "{searchString}" </h3></>)}
            
            <div className="posts-filters">
                <div className="post-filter chosen">Relevant</div>
                <div className="post-filter">Latest</div>
                <div className="post-filter">Top</div>
            </div>
        </div>
        <div className="search-container">
           {(posts.length === 0 && !isFetching) &&<> <div>No results match that query</div> <img src='https://cdni.iconscout.com/illustration/premium/thumb/folder-is-empty-4064360-3363921.png' /> </>}
            {!isFetching && (posts.map(p=>(

            <SearchCard key={p._id}  title={p.title} username={p.username} categories={p.categories} t={p.createdAt} id={p._id} />
            )))}
            
        </div>
    </div>
  )
}
