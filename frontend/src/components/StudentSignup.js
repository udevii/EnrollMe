import React, { useState } from 'react';
import './Login.css';

const StudentSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, role: 'student' });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Student Signup for EnrollMe</h2>
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
          <button type="submit" className="login-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default StudentSignup;
