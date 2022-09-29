import React, {useContext, useEffect} from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom'
import "./profile.css";
import SearchCard from "../../components/searchcard/SearchCard";
import Pic from '../../components/pic/Pic.jsx'
import CakeIcon from "@mui/icons-material/Cake";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import formatDate from "../../util/toFormatedDate";
import { useState } from "react";
import { CardActions } from "@mui/material";

export default function Profile() {
  const {user} = useContext(Context)
  const locationn = useLocation();
  const URL_USER_ID = locationn.pathname.replace('/', '')
  const [profile, setProfile] = useState([])
  const [profilePosts, setProfilePosts] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  
  useEffect(()=> {
    setIsFetching(true)
    const getUser = async ()=>{
      const User = await axios.get(`https://backend1001.vercel.app/api/users/${URL_USER_ID}`)
      const posts = await axios.get(`https://backend1001.vercel.app/api/posts/?user=${await User.data.username}`, {
        user: profile.username
      })
      setProfile(User.data)
      setProfilePosts(posts.data)
    setIsFetching(false)
  }
    getUser()
  },[URL_USER_ID])



  return (
    ( isFetching ? <div className='container'>  <img src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-3.gif" alt="Loading" /></div> : <>
    <div className="profile">
      <div className="cover"></div>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-pic-container">
            <Pic username={profile.username} />
          </div>
          <h3 className="name">{profile.name ? profile.name : 'this user does not have a name'}</h3>
          <div className="about">
           {profile.about ? profile.about : 'waiting for the user to update his profile'}
          </div>
          <div className="joined-date">
            <CakeIcon /> Joined on {formatDate(profile.createdAt)}
          </div>
        </div>
         {(user && URL_USER_ID === user._id) ? 
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <div className="settings-btn">Edit profile</div>
        </Link>
          
          :
          <></>
          }
        <div className="profile-infos">
          <div className="skills-container">
            <div className="skills">
              <h3 className="skills-title">Skills/Languages</h3>
              <div className="the-skills">
                <p>
                {profile.skills  ? profile.skills : 'waiting for the user to update his profile'}
                </p>
              </div>
            </div>
          </div>

          <div className="post-hist">
            {profilePosts.map(p =>(
            <SearchCard key={p._id + Math.random()} userid={p.userid} title={p.title} username={p.username} categories={p.categories} t={p.createdAt} id={p._id} />

            ))}
          </div>
        </div>
      </div>
    </div>
    </>)
  );
}
