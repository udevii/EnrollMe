// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to EnrollMe</h1>
        <p>Your one-stop solution for course management</p>
      </header>
      <div className="home-content">
        <div className="home-card">
          <h2>For Students</h2>
          <p>Manage your courses, track your progress, and more.</p>
          <Link to="/student-login">
            <button className="home-button">Get Started</button>
          </Link>
        </div>
        <div className="home-card">
          <h2>For Teachers</h2>
          <p>Organize your classes, communicate with students, and more.</p>
          <Link to="/teacher-login">
            <button className="home-button">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;


