import React from 'react';
import styles from './SignIn.module.css';

const SignIn = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
            <h1 className={styles.title}>Footub</h1>
            <input type="text" id="username" name="username" className={styles.input} placeholder='Username' required />
            <input type="password" id="password" name="password" className={styles.input} placeholder='Password' required />
            <button type="submit" className={styles.button}>Sign In</button>
       </form>
       <a href="/sign-up" className={styles.href}>Don't have an account? Sign up here.</a>
    </div>
  );
}

export default SignIn;