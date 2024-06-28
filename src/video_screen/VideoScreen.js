import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VideoScreen.css';
import SideVideo from './SideVideo/SideVideo';
import CommentSection from './CommentSection/CommentSection';
import ActionBar from './ActionsBar/ActionBar';
import LeftMenu from '../leftMenu/LeftMenu';

const VideoScreen = ({ loggedInUser, videos, comments, setComments, calculateTimeAgo, displayTimes }) => {
  const { id } = useParams(); // Get the video ID from the URL params

  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [displayTime, setDisplayTime] = useState('');

  const updateComments = (videoId, newComments) => {
    const updatedComments = comments.map((commentData) =>
      commentData.videoId === videoId
        ? { ...commentData, comments: newComments }
        : commentData
    );
    setComments(updatedComments); // Update the comments in the parent component
  };

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`http://localhost:12345/api/videos/${id}`);
        if (!response.ok) {
          throw new Error('Video not found');
        }
        const data = await response.json();
        setCurrentVideo(data);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [id]);

  useEffect(() => {
    if (currentVideo) {
      setDisplayTime(calculateTimeAgo(currentVideo.uploadTime));
      const interval = setInterval(() => {
        setDisplayTime(calculateTimeAgo(currentVideo.uploadTime));
      }, 60000); // Update every minute

      return () => clearInterval(interval);
    }
  }, [currentVideo, calculateTimeAgo]);

  if (!currentVideo) {
    return <div></div>;
  }

  // adding videos to side list which arent the main video
  const sideVideos = videos.filter((video) => video._id !== id);

  const sideVideoList = sideVideos.map((video, key) => (
    <SideVideo
      id={video._id}
      title={video.title}
      author={video.author}
      views={video.views}
      img={video.img}
      date={calculateTimeAgo(video.uploadTime)}
      key={key}
    />
  ));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1 vh-100">
          <LeftMenu />
        </div>
        <div className="col-7">
          <div>
            <div>
              <video className="thumbnail" controls autoPlay src={currentVideo.video}></video>
              <div id="title">{currentVideo.title}</div>
              <ActionBar
                className="action-bar"
                userName={currentVideo.author}
                img={currentVideo.authorImage}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
                isDisliked={isDisliked}
                setIsDisliked={setIsDisliked}
                isSubscribed={isSubscribed}
                setIsSubscribed={setIsSubscribed}
              />
              <div id="description">
                <div id="stats">{currentVideo.views} views - {displayTime}</div>
                <div>{currentVideo.description}</div>
              </div>
              <CommentSection
                videoId={currentVideo._id}
                initialComments={comments}
                updateComments={updateComments}
                loggedInUser={loggedInUser}
                calculateTimeAgo={calculateTimeAgo}
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div>{sideVideoList}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoScreen;
