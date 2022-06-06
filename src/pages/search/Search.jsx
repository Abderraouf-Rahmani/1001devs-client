import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchBar from '../../components/searchbar/SearchBar'
import SearchCard from '../../components/searchcard/SearchCard'
import './search.css'

export default function Search() {
  const location = useLocation();
  
  return (
    <div className="search-page">
      <div className="search-header">
        <div className="search-bar">
          {location.pathname === '/search' && <SearchBar />}
          
        </div>

      </div>
        <div className="search-header">
          {location.pathname === '/explore' ? (<><h3 className="search-string">Explore</h3></>) : (<><h3 className="search-string">Search results for "FlexBox"</h3></>)}
            
            <div className="posts-filters">
                <div className="post-filter chosen">Relevant</div>
                <div className="post-filter">Latest</div>
                <div className="post-filter">Top</div>
            </div>
        </div>
        <div className="search-container">
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            
        </div>
    </div>
  )
}
