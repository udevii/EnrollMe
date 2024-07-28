import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TeacherLogin from './components/TeacherLogin';
import TeacherSignup from './components/TeacherSignup';
import TeacherDashboard from './components/TeacherDashboard';
import CreateCourse from './components/CreateCourse';
import MonitorEnrollment from './components/MonitorEnrollment';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/teacher-signup" element={<TeacherSignup />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/monitor-enrollment" element={<MonitorEnrollment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
