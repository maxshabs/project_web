import React from 'react';
import { Link } from 'react-router-dom';
import './SideVideo.css';

function SideVideo({ id, title, author, views, img, date }) {
  return (
    <Link to={`/videos/${id}`} className="sideVideoContainer link-style">
      <div className="row">
        <div className="col-md-6">
          <img src={img} className="sideVideoPic" alt=""></img>
        </div>
        <div className="col-md-6">
          <div className="sideVideoTextContainer">
            <h5 className="sideVideoTitle">{title}</h5>
            <p className="sideVideoText"> {author}</p>
            <p className="sideVideoStats"><small className="text-body-secondary">{views} views - {date} ago</small></p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SideVideo;
