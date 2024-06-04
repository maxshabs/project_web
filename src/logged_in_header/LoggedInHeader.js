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
      <Search doSearch={doSearch} />
      <Link to={"/upload-video"} className={styles.button}><i class="bi bi-plus-circle"></i></Link>
      <ThemeSwitchButton toggleTheme={toggleTheme} theme={theme} />
      <img src={loggedInUser.profilePicture} alt="Profile" className={styles.profilePicture} />
      <span>{loggedInUser.displayName}</span>
      <Link to={"/sign-in"} className={styles.button}><i class="bi bi-box-arrow-right"></i> Sign Out</Link>
      </>:
      <>
      <Link to="/main">
          <img src={Logo} alt="Home" className={styles.logo} />
      </Link>
      <Search doSearch={doSearch} />
      <ThemeSwitchButton toggleTheme={toggleTheme} theme={theme} />
      <Link to={"/sign-in"} className={styles.button}><i class="bi bi-person m-1"></i> Sign in </Link>
      <Link to={"/sign-up"} className={styles.button}><i class="bi bi-person-plus"></i> Sign Up </Link>
      </>  }
    </header>
  );
};

export default LoggedInHeader;
