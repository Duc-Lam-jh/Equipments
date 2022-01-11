import { React } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import NotFound from '../pages/notFoundPage';
import LoginPage from '../pages/loginPage/loginPage';
import Homepage from '../pages/homepage/homepage';
import AdminHomepage from '../pages/homepage/adminHomepage';

import './App.css';

function App() {
  const userEmail = useSelector(state => state.auth.userEmail);
  const userRole = useSelector(state => state.auth.userRole);

  return (
    <Router>
      <Routes>
        {!userEmail &&
          <>
            <Route path='/' element={<LoginPage />} />
          </>}
        {userRole === "admin" ?
          <>
            <Route path='/' element={<AdminHomepage />} />
            <Route path='/user' element={<Homepage />} />
          </> :
          <>
            <Route path='/' element={<Homepage />} />
            <Route path="/user" element={<Navigate to="/" />} />
          </>}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
