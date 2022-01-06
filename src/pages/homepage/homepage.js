import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const userEmail = useSelector(state => state.auth.userEmail);

  return (
    <React.Fragment>
      <h2>Home</h2>
      <Link to='/login'>Login page</Link>
    </React.Fragment>  
  )
};
export default Homepage;