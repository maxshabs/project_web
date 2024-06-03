// src/ManageRoutes.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './sign_up/SignUp';
import SignIn from './sign_in/SignIn';
import UploadVideo from './upload_video/UploadVideo';
import MainPage from './main_page/MainPage';  
import LoggedInHeader from './logged_in_header/LoggedInHeader';

const ManageRoutes = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const validateUser = (username, password) => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setLoggedInUser(user);
    }
    return user;
  };

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp addUser={addUser} />} />
      <Route path="/sign-in" element={<SignIn validateUser={validateUser} />} />
      <Route 
        path="/main" 
        element={
          <>
            <LoggedInHeader displayName={loggedInUser ? loggedInUser.displayName : null} profilePicture={loggedInUser ? loggedInUser.profilePicture : null} />
            <MainPage />
          </>
        } 
      />
      <Route 
        path="/upload-video" 
        element={
          <>
            <LoggedInHeader displayName={loggedInUser ? loggedInUser.displayName : null} profilePicture={loggedInUser ? loggedInUser.profilePicture : null} />
            <UploadVideo />
          </>
        } 
      />
      <Route path="/" element={<Navigate to="/sign-up" />} />
    </Routes>
  );
};

export default ManageRoutes;
