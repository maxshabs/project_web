// src/sign_in/SignIn.js
import React from 'react';
import styles from './SignIn.module.css';
import logo from '../assets/lebronsunshine.jpg';

const SignIn = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>VidTube</h1>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <img src={logo} alt='logo' className={styles.logo} />
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className={styles.input} placeholder="example123" required />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className={styles.input} placeholder="********" required />
          </div>
          <button type="submit" className={styles.button}>Sign In</button>
          <a href="/sign-up" className={styles.link}>Don't have an account? Sign up here.</a>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
