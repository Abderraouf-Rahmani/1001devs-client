import React, { useState } from 'react';
import '../../pages/login/login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

export default function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setIsLoading(true);
    try {
      const res = await axios.post(
        'https://1001devs.arabickitchenis.life/api/auth/register',
        {
          username,
          email,
          password,
        }
      );
      setIsLoading(false);
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }

    //console.log(username, email, password)
  };
  return (
    <div className="login-container container">
      <div className="auth-title">Register</div>
      <form className="login-form" onSubmit={handleSubmit}>
        {error && (
          <span className="error">Email or Username is already used</span>
        )}
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn" disabled={isLoading}>
          {isLoading ? (
            <span className="loader">
              <RefreshRoundedIcon />
            </span>
          ) : (
            'Register'
          )}
        </button>
        <span className="UX-msg">
          you already have an account?{' '}
          <Link to="/login">
            <span className="link">login »</span>
          </Link>
        </span>
      </form>
    </div>
  );
}
