import { React } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import NotFound from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RootHomepage from '../pages/homepage/RootHomepage';
import Homepage from '../pages/homepage/Homepage';
import AdminHomepage from '../pages/homepage/AdminHomepage';

import './App.css';

function App() {
  const userEmail = useSelector(state => state.auth.userEmail);
  const userRole = useSelector(state => state.auth.userRole);

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <RootHomepage /> } />
        <Route path='/login' element={!userEmail ? <LoginPage /> : <Navigate to='/' />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
