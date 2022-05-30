import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className="login-container container">
        <div className="auth-title">Login</div>
        <form  className="login-form">
            <input type="email" name='email' id="email" placeholder='email'/>
            <input type="password" name='password' id="password" placeholder='password'/>
            <button type="submit" className='login-btn'>Login</button>
        </form>
    </div>
  )
}
