import { React } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

        {!userEmail && <Route path='/' element={<LoginPage />} />}
        {userRole === "admin" ?
          <>
            <Route path='/' element={<AdminHomepage />} />
            <Route path='/user' element={<Homepage />} />
          </> :
          <>
            <Route path='/' element={<Homepage />} />
          </>}
      </Routes>
    </Router>
  );
}

export default App;
