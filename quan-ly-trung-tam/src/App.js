import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import CoursePage from './pages/CoursePage';
import StatisticsPage from './pages/StatisticsPage';
import './styles/App.css';
import './styles/StudentPage.css';
import './styles/CoursePage.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Quản Lý Trung Tâm</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/students">Học viên</Link>
            <Link className="nav-link" to="/courses">Khóa học</Link>
            <Link className="nav-link" to="/statistics">Thống kê</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
