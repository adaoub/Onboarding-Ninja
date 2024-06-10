import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';
import './index.css';
import Manager from './pages/Manager';
import Candidate from './pages/Candidate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/manager" element={<Manager />} />
        <Route path="/candidate" element={<Candidate />} />
      </Routes>
    </Router>
  );
}

export default App;
