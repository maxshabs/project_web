// src/main_page/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/upload-video">Upload Video</Link>
    </div>
  );
};

export default MainPage;
