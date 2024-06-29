import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './sign_up/SignUp';
import SignIn from './sign_in/SignIn';
import UploadVideo from './upload_video/UploadVideo';
import EditVideo from './edit_video/EditVideo';
import MainPage from './main_page/MainPage';
import LoggedInHeader from './logged_in_header/LoggedInHeader';
import videos from './data/videos.json';
import VideoScreen from './video_screen/VideoScreen';
import initialComments from './data/comments.json';
import Logo from './favicon.png';

const ManageRoutes = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [allVideos, setAllVideos] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [theme, setTheme] = useState('light');
  const [comments, setComments] = useState(initialComments);
  const [displayTimes, setDisplayTimes] = useState({});

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:12345/api/videos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setAllVideos(data);
        setVideoList(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const addUser = async (newUser) => {
    try {
      const response = await fetch('http://localhost:12345/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      if (response.ok) {
        const user = await response.json();
        setUsers((prevUsers) => [...prevUsers, user]);
        return null; // No error
      } else {
        const errorData = await response.json();
        return errorData.errors ? errorData.errors.join(', ') : 'Failed to add user';
      }
    } catch (error) {
      console.error('Error adding user:', error);
      return 'Failed to add user';
    }
  };
  

  const validateUser = async (username, password) => {
    try {
      const response = await fetch('http://localhost:12345/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setLoggedInUser(data.user); // Set the full user object in state
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.errors ? errorData.errors.join(', ') : 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error validating user:', error);
      return null;
    }
  };
  

  const signOutUser = () => {
    setLoggedInUser(null);
  };


  const handleUploadVideo = async (newVideo) => {
    try {
      const uploadTime = new Date().toISOString();
      const token = localStorage.getItem('jwtToken');
  
      const response = await fetch(`http://localhost:12345/api/users/${loggedInUser.username}/videos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newVideo),
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload video');
      }
  
      // Fetch the updated list of videos from the server
      const fetchUpdatedVideos = async () => {
        const response = await fetch('http://localhost:12345/api/videos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setAllVideos(data);
        setVideoList(data);
      };
  
      fetchUpdatedVideos();
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };
  
  

  const handleEditVideo = (editedVideo) => {
    const updatedVideos = allVideos.map((video) =>
      video.id === editedVideo.id ? editedVideo : video
    );
    setAllVideos(updatedVideos);
    setVideoList(updatedVideos);
  };

  const handleDeleteVideo = (videoId) => {
    const updatedVideos = allVideos.filter((video) => video.id !== videoId);
    const updatedComments = comments.filter((comment) => comment.videoId !== videoId);
    setAllVideos(updatedVideos);
    setVideoList(updatedVideos);
    setComments(updatedComments);
  };
  

  const calculateTimeAgo = (uploadTime) => {
    const now = new Date();
    const uploadDate = new Date(uploadTime);
    const differenceInSeconds = Math.floor((now - uploadDate) / 1000);
    let timeAgo = '';

    if (differenceInSeconds < 60) {
      timeAgo = `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < 3600) {
      timeAgo = `${Math.floor(differenceInSeconds / 60)} minutes ago`;
    } else if (differenceInSeconds < 86400) {
      timeAgo = `${Math.floor(differenceInSeconds / 3600)} hours ago`;
    } else if (differenceInSeconds < 2592000) {
      timeAgo = `${Math.floor(differenceInSeconds / 86400)} days ago`;
    } else if (differenceInSeconds < 31536000) {
      timeAgo = `${Math.floor(differenceInSeconds / 2592000)} months ago`;
    } else {
      timeAgo = `${Math.floor(differenceInSeconds / 31536000)} years ago`;
    }

    return timeAgo;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedDisplayTimes = {};
      allVideos.forEach((video) => {
        updatedDisplayTimes[video.id] = calculateTimeAgo(video.uploadTime);
      });
      setDisplayTimes(updatedDisplayTimes);
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [allVideos]);

  useEffect(() => {
    const updatedDisplayTimes = {};
    allVideos.forEach((video) => {
      updatedDisplayTimes[video.id] = calculateTimeAgo(video.uploadTime);
    });
    setDisplayTimes(updatedDisplayTimes);
  }, [allVideos]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const doSearch = (query) => {
    setVideoList(allVideos.filter((video) => video.title.toLowerCase().includes(query.toLowerCase())));
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
            <LoggedInHeader loggedInUser={loggedInUser} doSearch={doSearch} toggleTheme={toggleTheme} theme={theme} signOutUser={signOutUser} />
            <MainPage videos={videoList} handleDeleteVideo={handleDeleteVideo} loggedInUser={loggedInUser} calculateTimeAgo={calculateTimeAgo} displayTimes={displayTimes} />
          </>
        }
      />
      <Route
        path="/upload-video"
        element={
          loggedInUser && (
            <>
              <LoggedInHeader loggedInUser={loggedInUser} doSearch={doSearch} toggleTheme={toggleTheme} theme={theme} signOutUser={signOutUser} />
              <UploadVideo handleUploadVideo={handleUploadVideo} loggedInUser={loggedInUser} videos={allVideos} />
            </>
          )
        }
      />
      <Route
        path="/edit-video/:id"
        element={
          loggedInUser && (
            <>
              <LoggedInHeader loggedInUser={loggedInUser} doSearch={doSearch} toggleTheme={toggleTheme} theme={theme} signOutUser={signOutUser} />
              <EditVideo handleEditVideo={handleEditVideo} videos={allVideos} />
            </>
          )
        }
      />
      <Route
        path="/videos/:id"
        element={
          <>
            <LoggedInHeader loggedInUser={loggedInUser} doSearch={doSearch} toggleTheme={toggleTheme} theme={theme} signOutUser={signOutUser} />
            <VideoScreen loggedInUser={loggedInUser} videos={allVideos} comments={comments} setComments={setComments} calculateTimeAgo={calculateTimeAgo} displayTimes={displayTimes} />
          </>
        }
      />
      <Route path="/" element={<Navigate to="/main" />} />
    </Routes>
  );
};

export default ManageRoutes;