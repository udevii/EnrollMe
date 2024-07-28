// src/components/StudentLogin.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, role: 'student' });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Student Login to EnrollMe</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="login-field">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/student-signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;

