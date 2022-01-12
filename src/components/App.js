import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { isUserLoggedIn } from '../app/utilities/utilities';
import { setActiveUser } from '../app/redux';

import NotFound from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RootHomepage from '../pages/homepage/RootHomepage';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const userData = isUserLoggedIn();
  if (userData) {
    dispatch(setActiveUser({ ...userData }));
  }

  const userEmail = useSelector(state => state.auth.userEmail);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<RootHomepage />} />
        <Route path='/login' element={!userEmail ? <LoginPage /> : <Navigate to='/' />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
