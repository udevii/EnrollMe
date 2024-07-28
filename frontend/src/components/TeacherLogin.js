// src/components/TeacherLogin.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    // Simulate successful login
    if (email === 'teacher@example.com' && password === 'password') {
      navigate('/teacher-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Teacher Login to EnrollMe</h2>
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
          Don't have an account? <Link to="/teacher-signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default TeacherLogin;

