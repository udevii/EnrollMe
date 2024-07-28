// src/components/TeacherDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Teacher Dashboard</h1>
      <p>Welcome to the teacher dashboard. Manage your courses and monitor student enrollment here.</p>
      <div className="dashboard-actions">
        <Link to="/create-course">
          <button className="dashboard-button">Create Course</button>
        </Link>
        <Link to="/monitor-enrollment">
          <button className="dashboard-button">Monitor Enrollment</button>
        </Link>
      </div>
    </div>
  );
};

export default TeacherDashboard;
