// src/logged_in_header/LoggedInHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoggedInHeader.module.css';

const LoggedInHeader = ({ displayName, profilePicture }) => {

  return (
    <header className={styles.loggedInHeader}>
      {profilePicture && <img src={profilePicture} alt="Profile" className={styles.profilePicture} />}
      {displayName ? <span>Welcome, {displayName}!</span> : <span>Not signed in</span>}
      <Link to={"/sign-in"} className={styles.signOutButton}>Sign Out</Link>
    </header>
  );
};

export default LoggedInHeader;
