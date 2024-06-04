// src/videoItem/VideoItem.js
import React, { useEffect, useState } from 'react';
import './VideoItem.css';

function VideoItem({ title, author, views, img, video, uploadTime }) {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(calculateTimeAgo(uploadTime));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [uploadTime]);

  const calculateTimeAgo = (time) => {
    const now = new Date();
    const uploaded = new Date(time);
    const diffInMs = now - uploaded;

    const minutes = Math.floor(diffInMs / 60000);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} days ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;

    const years = Math.floor(months / 12);
    return `${years} years ago`;
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6" id="">
      <a className="card" href="#">
        <img src={img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
          <p className="card-text">{views} views. {timeAgo}</p>
          <p className="card-text"><a href={video}>Watch Video</a></p>
        </div>
      </a>
    </div>
  );
}

export default VideoItem;
