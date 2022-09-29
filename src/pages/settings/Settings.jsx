import React, {useContext, useRef} from "react";
import "./settings.css";
import { Context } from "../../context/Context";

import axios from "axios";

export default function Settings() {
  const   {dispatch, isFetching } = useContext(Context)
  const {user} = useContext(Context)
  const name = useRef() 
  const email = useRef() 
  const username = useRef() 
  const skills = useRef() 
  const about = useRef() 

  const handleUpdate = async (e)=>{
    e.preventDefault()

    try{
     const update = await axios.put(`https://backend1001.vercel.app/api/users/${user._id}`,{
      name: name.current.value,
      username: username.current.value,
      email: email.current.value,
      skills: skills.current.value,
      about: about.current.value,
      userId : user._id
      } )
      dispatch({type: "LOGIN_SUCCESS", payload: update.data})
      window.location.href = `/${user._id}`;
    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <div className="settings">
      <div className="page-title">
        <h1>Settings</h1>
      </div>
      <form className="setting-form" action="#" onSubmit={handleUpdate}>
        <div className="user-settings">
          <h2>User</h2>
          <label htmlFor="name">Name</label>
          <input
          ref={name}
            type="text"
            name="name"
            id="name"
            className="name"
            placeholder="John Doe"
            required
            defaultValue={user.name && user.name}
          />

          <label htmlFor="email">Email</label>
          <input
          ref={email}
            type="text"
            name="email"
            id="email"
            className="email"
            placeholder="John.Doe@exmple.com"
            defaultValue={user.email}
            required 
          />

          <label htmlFor="username">Username</label>
          <input
           ref={username}
            type="text"
            name="username"
            id="username"
            className="username"
            placeholder="JohnDoe"
            defaultValue={user.username}
            required
          />
          
        </div>
        <div className="skills-settings">
          <label htmlFor="email">About</label>
          
          <textarea name="skills" id="skills" className="skills" ref={about} defaultValue={user.about} required/>
        </div>
        <div className="skills-settings">
          <label htmlFor="email">Skills & Languages</label>
          <p>
            What tools and languages are you most experienced with? Are you
            specialized or more of a generalist?
          </p>
          <textarea name="skills" id="skills" className="skills" ref={skills} defaultValue={user.skills} required/>
        </div>
        <button type="submit" className="setting-btn">
          Save profile informations
        </button>
      </form>
    </div>
  );
}
