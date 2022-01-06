import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/loginPage/loginPage';
import Homepage from '../pages/homepage/homepage';

import './App.css';

function App() {
  const userEmail = useSelector(state => state.auth.userEmail);
  console.log(userEmail);
  return (
    <Router>
      <Routes>
        {!userEmail && <Route path='/' element={<LoginPage />} />}
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
