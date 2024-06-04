// src/upload_video/UploadVideo.js
import React, { useState } from "react";
import styles from "./UploadVideo.module.css";
import { Link, useNavigate } from "react-router-dom";

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
      id: String(videos.length + 1),
      title,
      author: loggedInUser.displayName,
      views: "0",
      img: URL.createObjectURL(imageFile),
      video: URL.createObjectURL(videoFile),
      uploadTime: new Date().toISOString() // Store the upload time in ISO format
    };

    handleUploadVideo(newVideo);
    navigate('/main');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload Video</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputsContainer}>
          <input 
            type="text" 
            id="title" 
            name="title" 
            className={styles.input} 
            placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required 
          />
          <textarea 
            id="description" 
            name="description" 
            className={`${styles.input} ${styles.descriptionInput}`} 
            placeholder="Description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required 
          />
          <label className={styles.fileLabel} htmlFor="image">Upload Image</label>
          <input 
            type="file" 
            id="image" 
            name="image" 
            className={styles.input} 
            onChange={(e) => setImageFile(e.target.files[0])}
            required 
          />
          <label className={styles.fileLabel} htmlFor="video">Upload Video</label>
          <input 
            type="file" 
            id="video" 
            name="video" 
            className={styles.input} 
            onChange={(e) => setVideoFile(e.target.files[0])}
            required 
          />
        </div>
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        <Link to="/main" className={styles.button}>Cancel</Link>
        <button type="submit" className={styles.button}>Upload Video</button>
      </form>
    </div>
  );
}

export default UploadVideo;
