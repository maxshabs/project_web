// src/edit_video/EditVideo.js
import React, { useState, useEffect } from "react";
import styles from "./EditVideo.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditVideo = ({ handleEditVideo, videos }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const videoToEdit = videos.find(video => video.id === id);
    if (videoToEdit) {
      setTitle(videoToEdit.title);
      setDescription(videoToEdit.description);
      setAuthor(videoToEdit.author);
      setImageFile(videoToEdit.img);
      setVideoFile(videoToEdit.video);
    }
  }, [id, videos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !imageFile || !videoFile) {
      setErrorMessage('All fields are required.');
      return;
    }

    const editedVideo = {
      id,
      title,
      description,
      author,
      views: videos.find(video => video.id === id).views,
      img: typeof imageFile === 'string' ? imageFile : URL.createObjectURL(imageFile),
      video: typeof videoFile === 'string' ? videoFile : URL.createObjectURL(videoFile),
      uploadTime: videos.find(video => video.id === id).uploadTime
    };

    handleEditVideo(editedVideo);
    navigate('/main');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Edit Video</h1>
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
          />
          <label className={styles.fileLabel} htmlFor="video">Upload Video</label>
          <input 
            type="file" 
            id="video" 
            name="video" 
            className={styles.input} 
            onChange={(e) => setVideoFile(e.target.files[0])}
          />
        </div>
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        <Link to="/main" className={styles.button}>Cancel</Link>
        <button type="submit" className={styles.button}>Save Changes</button>
      </form>
    </div>
  );
}

export default EditVideo;
