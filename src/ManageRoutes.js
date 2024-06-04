// src/ManageRoutes.js
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './sign_up/SignUp';
import SignIn from './sign_in/SignIn';
import UploadVideo from './upload_video/UploadVideo';
import MainPage from './main_page/MainPage';  
import LoggedInHeader from './logged_in_header/LoggedInHeader';
import videos from './data/videos.json';

const ManageRoutes = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [videoList, setVideoList] = useState(videos);
  const [theme, setTheme] = useState('light');

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

  const handleUploadVideo = (newVideo) => {
    setVideoList([newVideo, ...videoList]);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const doSearch = (query) => {
    setVideoList(videos.filter((video) => video.title.toLowerCase().includes(query.toLowerCase())));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp addUser={addUser} />} />
      <Route path="/sign-in" element={<SignIn validateUser={validateUser} />} />
      <Route 
        path="/main" 
        element={
          <>
            <LoggedInHeader loggedInUser={loggedInUser} doSearch={doSearch} toggleTheme={toggleTheme} theme={theme}/>
            <MainPage theme={theme} videos={videoList} />
          </>
        } 
      />
      <Route 
        path="/upload-video" 
        element={
          <>
            <LoggedInHeader loggedInUser={loggedInUser} doSearch={doSearch} toggleTheme={toggleTheme} theme={theme}/>
            <UploadVideo handleUploadVideo={handleUploadVideo} loggedInUser={loggedInUser} videos={videoList} />
          </>
        } 
      />
      <Route path="/" element={<Navigate to="/main" />} />
    </Routes>
  );
};

export default ManageRoutes;
