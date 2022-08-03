import React from 'react'
import "./footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="left-footer">
                <Link to={'/'}>
                    <div className="logo">
                        <div className="d1001">1001</div>
                        <div className='devs'>DEVS</div>
                    </div>
                </Link>

                <div className="socials">
                    <TwitterIcon className='footer-icon twitter-icon' />
                    <LinkedInIcon className='footer-icon linkedin-icon' />
                    <YouTubeIcon className='footer-icon youtube-icon' />
                </div>
            </div>
            
        </div>
    </div>
  )
}
