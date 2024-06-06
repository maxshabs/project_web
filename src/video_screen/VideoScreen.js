// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VideoScreen.css';
import SideVideo from './SideVideo/SideVideo';
import CommentSection from './CommentSection/CommentSection';
import initialComments from './Comments';
import videos from './videos';
import ActionBar from './ActionsBar/ActionBar';
import pic4 from './pic4.jpg';

const VideoScreen = () => {
  const { id } = useParams(); // Get the video ID from the URL params

  // State and function to update comments
  const [comments, setComments] = useState(initialComments);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const updateComments = (videoId, newComment) => {
    const updatedComments = comments.map((commentData) =>
      commentData.videoId === videoId
        ? { ...commentData, comments: [...commentData.comments, newComment] }
        : commentData
    );
    setComments(updatedComments);
  };

  useEffect(() => {
    const video = videos.find((video) => video.id === parseInt(id));
    setCurrentVideo(video);

    // Reset button states when a new video is loaded
    setIsLiked(false);
    setIsDisliked(false);
    setIsSubscribed(false);
  }, [id]);

  if (!currentVideo) {
    return <div>Error: Video not found.</div>; // Handle case where video is not found
  }

  // Filter out the current video from the list of videos
  const sideVideos = videos.filter((video) => video.id !== parseInt(id));

  const sideVideoList = sideVideos.map((video, key) => (
    <SideVideo
      id={video.id}
      title={video.title}
      author={video.author}
      views={video.views}
      image={video.image}
      key={key}
    />
  ));

  return (
    <div className="container-fluid">
      <div id="searchBar">
        <input></input>
        <button>Search</button>
      </div>
      <div className="row">
        <div className="col-2 bg-light vh-100">
          <ul className="list-group">
            <li className="list-group-item">An active item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="col-7">
          <div>
            <div>
              <video className="thumbnail" controls autoplay src={currentVideo.video}></video>
              <div id="title">{currentVideo.title}</div>
              <ActionBar
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
                img={pic4}
                userName="myUser"
                videoId={currentVideo.id}
                initialComments={comments}
                updateComments={updateComments}
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
