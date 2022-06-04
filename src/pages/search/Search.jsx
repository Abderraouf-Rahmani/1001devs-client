import React from 'react'
import SearchCard from '../../components/searchcard/SearchCard'
import './search.css'

export default function Search() {
  return (
    <div className="search-page">
        <div className="search-header">
            <h3 className="search-string">Search results for "FlexBox"</h3>
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
