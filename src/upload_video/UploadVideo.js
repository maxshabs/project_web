// src/upload_video/UploadVideo.js
import React from "react";
import styles from "./UploadVideo.module.css";

const UploadVideo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload Video</h1>
      <form className={styles.form}>
        <div className={styles.inputsContainer}>
          <input type="text" id="title" name="title" className={styles.input} placeholder="Title" required />
          <textarea id="description" name="description" className={`${styles.input} ${styles.descriptionInput}`} placeholder="Description" required />
          <input type="file" id="video" name="video" className={styles.input} required />
        </div>
        <button type="submit" className={styles.button}>Upload Video</button>
      </form>
    </div>
  );
}

export default UploadVideo;
