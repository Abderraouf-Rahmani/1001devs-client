import axios from 'axios';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import React, { useRef, useContext } from 'react'
import { Context } from '../../context/Context';
import "./login.css"

export default function Login() {
const userRef = useRef();
const passwordRef = useRef(); 
const   {dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    dispatch({type: "LOGIN_START"})

    try { 
      const res = await axios.post("https://1001devs.arabickitchenis.life/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
      window.location.href = "/";

    }catch(err){
      dispatch({type: "LOGIN_FAILURE"})
      
    }
  }

  
  return (
    <div className="login-container container">
        <div className="auth-title">Login</div>
        <form  className="login-form" onSubmit={handleSubmit}>

            <input ref={userRef}
            type="text"
            name='username'
            id="username"
            placeholder='username'/>

            <input
            ref={passwordRef}
            type="password"
            name='password'
            id="password"
            placeholder='password'/>

            <button type="submit" className='login-btn' disabled={isFetching} > {isFetching ? <span className='loader'><RefreshRoundedIcon /></span> : "Login"}  </button>
        </form>
    </div>
  )
}
