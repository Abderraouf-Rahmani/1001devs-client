import React from 'react'
import "./navbar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
//import SideNav from '../sidenave/SideNav';

export default function Navbar() {
  return (
    <nav className='navbar'>
       <div className="container">
           <div className="left">
           <TwitterIcon className='nav-icon' />
           <LinkedInIcon className='nav-icon' />
           <YouTubeIcon className='nav-icon' />
           </div>
           <div className="center">
               
                   <div className="nav-item">Home</div>
                   <div className="nav-item">Brows</div>
                   <div className="nav-item">About</div>
                   <div className="nav-item">contact</div>
               
           </div>
           <div className="right">
                    <LightModeOutlinedIcon className='nav-icon' />
                   <div className="nav-item">Login</div>
                   <div className="nav-item">Join us!</div>
                   <SearchIcon  className='nav-icon' />
               
           </div>
       </div>
    </nav>
  )
}
