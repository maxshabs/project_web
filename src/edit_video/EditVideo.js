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
  const [author, setAuthor] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const videoToEdit = videos.find(video => video.id === id);
    if (videoToEdit) {
      setTitle(videoToEdit.title);
      setDescription(videoToEdit.description);
      setAuthor(videoToEdit.author);
      setAuthorImage(videoToEdit.authorImage);
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
      uploadTime: videos.find(video => video.id === id).uploadTime,
      authorImage
    };

    handleEditVideo(editedVideo);
    navigate('/main');
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
