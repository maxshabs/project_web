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
import Logo from './favicon.png';

const ManageRoutes = () => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [allVideos, setAllVideos] = useState(videos);
  const [videoList, setVideoList] = useState(videos);
  const [theme, setTheme] = useState('light');
  const [comments, setComments] = useState([]);
  const [displayTimes, setDisplayTimes] = useState({});

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

  const signOutUser = () => {
    setLoggedInUser(null);
  };

  const handleUploadVideo = (newVideo) => {
    const uploadTime = new Date().toISOString();
    setVideoList([...allVideos, newVideo]);
    setAllVideos([...allVideos, newVideo]);
    setComments([...comments, { videoId: newVideo.id, comments: [{ id: 1, text: 'Great video, welcome to VidTube!', username: 'VidTube Official Account', date: uploadTime, img: Logo }] }]);
  
    setDisplayTimes((prevDisplayTimes) => ({
      ...prevDisplayTimes,
      [newVideo.id]: calculateTimeAgo(uploadTime),
    }));
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

  // Function to fetch all comments from the server
  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments');
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      setComments(data); // Assuming data is an array of comments
    } catch (error) {
      console.error('Error fetching comments:', error);
      // Handle error state or retry logic
    }
  };

  useEffect(() => {
    fetchComments(); // Fetch comments when component mounts
  }, []);

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
