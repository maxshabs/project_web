import React, { useState } from "react";
import "./UploadVideo.css";
import { Link, useNavigate } from "react-router-dom";
import LeftMenu from "../leftMenu/LeftMenu";

const UploadVideo = ({ handleUploadVideo, loggedInUser, videos }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !imageFile || !videoFile) {
      setErrorMessage('All fields are required.');
      return;
    }

    const newVideo = {
      id: videos[videos.length - 1].id + 1,
      title,
      description,
      author: loggedInUser.displayName,
      views: "0",
      img: URL.createObjectURL(imageFile),
      video: URL.createObjectURL(videoFile),
      uploadTime: new Date().toISOString(), // Store the upload time in ISO format
      authorImage: loggedInUser.profilePicture
    };

    handleUploadVideo(newVideo);
    navigate('/main');
  };

  return (
    <div className="row" id="upload-page-row">
      <div className="col-1 menu">
        <LeftMenu />
      </div>
      <div className="upload-container col-11">
        <h1 className="head-title"><i className="bi bi-upload"></i> Upload Video</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs-container">
            <label htmlFor="title">Title:</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              className="input" 
              placeholder="Title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required 
            />
            <label htmlFor="description">Description:</label>
            <textarea 
              id="description" 
              name="description" 
              className="input description-input" 
              placeholder="Description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required 
            />
            <label className="file-label" htmlFor="image">Upload Image:</label>
            <input 
              type="file" 
              id="image" 
              name="image" 
              className="input" 
              onChange={(e) => setImageFile(e.target.files[0])}
              required 
            />
            <label className="file-label" htmlFor="video">Upload Video:</label>
            <input 
              type="file" 
              id="video" 
              name="video" 
              className="input" 
              onChange={(e) => setVideoFile(e.target.files[0])}
              required 
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="buttons-container">
            <Link to="/main" className="button cancel-button"><i className="bi bi-x-octagon"></i> Cancel</Link>
            <button type="submit" className="button save-button"><i className="bi bi-upload"></i> Upload Video</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadVideo;
