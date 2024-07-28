// src/components/CreateCourse.js

import React, { useState } from 'react';
import './Dashboard.css';

const CreateCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [credits, setCredits] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle course creation logic here
    console.log({ courseName, description, credits });
  };

  return (
    <div className="dashboard-container">
      <h2>Create a New Course</h2>
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <div className="dashboard-field">
          <label>Course Name:</label>
          <input 
            type="text" 
            value={courseName} 
            onChange={(e) => setCourseName(e.target.value)} 
            required 
          />
        </div>
        <div className="dashboard-field">
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div className="dashboard-field">
          <label>Credits:</label>
          <input 
            type="number" 
            value={credits} 
            onChange={(e) => setCredits(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="dashboard-button">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
