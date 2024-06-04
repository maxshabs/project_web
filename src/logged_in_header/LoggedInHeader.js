// src/logged_in_header/LoggedInHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoggedInHeader.module.css';

const LoggedInHeader = ({ loggedInUser }) => {

  return (
    <header className={styles.loggedInHeader}>
      {loggedInUser ? 
      <> 
      <Link to={"/upload-video"} className={styles.button}> Upload Video</Link>
      <img src={loggedInUser.profilePicture} alt="Profile" className={styles.profilePicture} />
      <span>Welcome, {loggedInUser.displayName}!</span>
      <Link to={"/sign-in"} className={styles.button}>Sign Out </Link>
      </>:
      <>
      <Link to={"/sign-in"} className={styles.button}>Sign In </Link>
      <Link to={"/sign-up"} className={styles.button}>Sign Up </Link>
      </>  }
    </header>
  );
};

export default LoggedInHeader;
