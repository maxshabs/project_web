// src/logged_in_header/LoggedInHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoggedInHeader.module.css';
import Search from '../search/Search';
import ThemeSwitchButton from '../themeSwitchButton/ThemeSwitchButton';
import Logo from '../logo.png';

const LoggedInHeader = ({ loggedInUser, doSearch, toggleTheme, theme }) => {

  return (
    <header className={styles.loggedInHeader}>
      {loggedInUser ? 
      <> 
      <Link to="/main">
          <img src={Logo} alt="Home" className={styles.logo} />
      </Link>
      <Link to={"/upload-video"} className={styles.button}> Upload Video</Link>
      <img src={loggedInUser.profilePicture} alt="Profile" className={styles.profilePicture} />
      <span>Welcome, {loggedInUser.displayName}!</span>
      <Link to={"/sign-in"} className={styles.button}>Sign Out </Link>
      <ThemeSwitchButton toggleTheme={toggleTheme} theme={theme} />
      <Search doSearch={doSearch} />
      </>:
      <>
      <Link to="/main">
          <img src={Logo} alt="Home" className={styles.logo} />
      </Link>
      <Link to={"/sign-in"} className={styles.button}>Sign In </Link>
      <Link to={"/sign-up"} className={styles.button}>Sign Up </Link>
      <ThemeSwitchButton toggleTheme={toggleTheme} theme={theme} />
      <Search doSearch={doSearch} />
      </>  }
    </header>
  );
};

export default LoggedInHeader;
