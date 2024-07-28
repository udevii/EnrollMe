// src/components/Login.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Login.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Login = () => {
  const query = useQuery();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  useEffect(() => {
    const roleFromQuery = query.get('role');
    if (roleFromQuery) {
      setRole(roleFromQuery);
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, role });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to EnrollMe</h2>
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
          <div className="login-field">
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
