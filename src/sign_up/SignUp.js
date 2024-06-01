// src/sign_up/SignUp.js
import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Password must be at least 8 characters long and contain at least one capital letter, one small letter, one number, and one special character
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (!strongPasswordRegex.test(newPassword)) {
      setErrorMessage('Password must be at least 8 characters long and contain at least one capital letter, one small letter, one number, and one special character.');
    } else {
      setErrorMessage('');
    }
  };

  const validateVerifyPassword = (e) => {
    const newVerifyPassword = e.target.value;
    setVerifyPassword(newVerifyPassword);

    if (newVerifyPassword !== password) {
      setErrorMessage('Passwords do not match.');
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorMessage === '') {
      // Proceed with form submission
      console.log('Form submitted');
    } else {
      // Prevent form submission
      console.log('Form contains errors');
    }
  };
  
  return (
    <div className="container">
      <h1 className="title">Sign Up</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" name="username" className="input" required />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" name="password" className="input" value={password} onChange={validatePassword} required />
        </div>
        <div className="form-row">
          <label htmlFor="verifyPassword" className="form-label">Verify Password:</label>
          <input type="password" id="verifyPassword" name="verifyPassword" className="input" value={verifyPassword} onChange={validateVerifyPassword} required />
        </div>
        <div className="form-row">
          <label htmlFor="displayName" className="form-label">Display Name:</label>
          <input type="text" id="displayName" name="displayName" className="input" required />
        </div>
        <div className="form-row">
          <label htmlFor="profilePicture" className="form-label">Upload Profile Picture:</label>
          <input type="file" id="profilePicture" name="profilePicture" className="input" required />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>} 
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
