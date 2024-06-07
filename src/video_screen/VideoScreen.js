import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VideoScreen.css';
import SideVideo from './SideVideo/SideVideo';
import CommentSection from './CommentSection/CommentSection';
import ActionBar from './ActionsBar/ActionBar';
import LeftMenu from '../leftMenu/LeftMenu';

const VideoScreen = ({ loggedInUser, videos, comments, setComments }) => {
  const { id } = useParams(); // Get the video ID from the URL params

  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const updateComments = (videoId, newComments) => {
    const updatedComments = comments.map((commentData) =>
      commentData.videoId === videoId
        ? { ...commentData, comments: newComments }
        : commentData
    );
    setComments(updatedComments); // Update the comments in the parent component
  };

  useEffect(() => {
    const video = videos.find((video) => video.id === id);
    setCurrentVideo(video);

    // Reset button states when a new video is loaded
    setIsLiked(false);
    setIsDisliked(false);
    setIsSubscribed(false);
  }, [id, videos]);

  if (!currentVideo) {
    return <div></div>;
  }

  // Filter out the current video from the list of videos
  const sideVideos = videos.filter((video) => video.id !== id);

  const sideVideoList = sideVideos.map((video, key) => (
    <SideVideo
      id={video.id}
      title={video.title}
      author={video.author}
      views={video.views}
      img={video.img}
      date={video.uploadTime}
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
              <ActionBar className="action-bar"
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
                <div id="stats">{currentVideo.views} views - {currentVideo.date}</div>
                <div>{currentVideo.description}</div>
              </div>
              <CommentSection
                videoId={currentVideo.id}
                initialComments={comments}
                updateComments={updateComments}
                loggedInUser={loggedInUser}
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
