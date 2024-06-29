// src/edit_video/EditVideo.js
import React, { useState, useEffect } from "react";
import "./EditVideo.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import LeftMenu from "../leftMenu/LeftMenu";

const EditVideo = ({ handleEditVideo, videos }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [author, setAuthor] = useState('');
  const [uploadTime, setUploadTime] = useState('');
  const [authorImage, setAuthorImage] = useState('');

  useEffect(() => {
    const videoToEdit = videos.find(video => video._id === id);
    if (videoToEdit) {
      setTitle(videoToEdit.title);
      setDescription(videoToEdit.description);
      setImageFile(videoToEdit.img);
      setVideoFile(videoToEdit.video);
      setAuthor(videoToEdit.author);
      setUploadTime(videoToEdit.uploadTime);
      setAuthorImage(videoToEdit.authorImage);
    }
  }, [id, videos]);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !imageFile || !videoFile) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
      const imgBase64 = typeof imageFile === 'string' ? imageFile : await convertToBase64(imageFile);
      const videoBase64 = typeof videoFile === 'string' ? videoFile : await convertToBase64(videoFile);

      const editedVideo = {
        title,
        description,
        author,
        img: imgBase64,
        video: videoBase64,
        uploadTime,
        authorImage
      };
      
      await handleEditVideo(id, editedVideo);
      navigate('/main');
    } catch (error) {
      console.error('Error editing video:', error);
      setErrorMessage('Error editing video.');
    }
  };

  return (
    <div className="row" id="edit-page-row">
      <div className="col-1 menu">
        <LeftMenu />
      </div>
      <div className="edit-container col-11">
        <h1 className="head-title"><i class="bi bi-pencil-square"></i> Edit Video</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs-container">Title:
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
            Description:
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
            />
            <label className="file-label" htmlFor="video">Upload Video:</label>
            <input
              type="file"
              id="video"
              name="video"
              className="input"
              onChange={(e) => setVideoFile(e.target.files[0])}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="buttons-container">
            <Link to="/main" className="button cancel-button"><i class="bi bi-x-octagon"></i> Cancel</Link>
            <button type="submit" className="button save-button"><i class="bi bi-floppy"></i> Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditVideo;
