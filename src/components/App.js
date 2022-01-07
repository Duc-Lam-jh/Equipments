import { React } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/loginPage/loginPage';
import Homepage from '../pages/homepage/homepage';
import AdminHomepage from '../pages/homepage/adminHomepage';

import './App.css';

function App() {
  const userEmail = localStorage.getItem("userEmail");
  const userRole = localStorage.getItem("userRole");
  
  const userEmailFromState = useSelector(state => state.auth.userEmail);
  const userRoleFromState = useSelector(state => state.auth.userRole);

  return (
    <Router>
      <Routes>
        {!userEmailFromState && <Route path='/' element={<LoginPage />} />}
        {userRoleFromState==="admin" ?
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
