import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    
    <form action="/search" method='get' className="nav-search-form">
      <input
        type="text"
        name="search"
        id="search"
        className="search"
        placeholder="Search..."
      />
      <button type="submit" className="search-submit-btn">
        <SearchIcon className="nav-icon" />
      </button>
    </form> 
  
  )
}
