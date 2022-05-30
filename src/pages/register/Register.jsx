import React from 'react'
import '../../pages/login/login.css'
export default function Register() {
  return (
    <div className="login-container container">
        <div className="auth-title">Register</div>
        <form  className="login-form">
            <input type="text" name='username' id="username" placeholder='username'/>
            <input type="email" name='email' id="username" placeholder='email'/>
            <input type="password" name='password' id="password" placeholder='password'/>
            <button type="submit" className='login-btn'>Register</button>
        </form>
    </div>
  )
}
