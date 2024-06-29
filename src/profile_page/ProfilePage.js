import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.css';

const ProfilePage = ({ loggedInUser, fetchUser, updateUser, deleteUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(loggedInUser);
  const [username, setUsername] = useState(loggedInUser.username);
  const [displayName, setDisplayName] = useState(loggedInUser.displayName);
  const [profilePicture, setProfilePicture] = useState(loggedInUser.profilePicture);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
        setUsername(userData.username);
        setDisplayName(userData.displayName);
        setProfilePicture(userData.profilePicture);
      } catch (error) {
        console.error('Error fetching user:', error);
        setErrorMessage(error.message);
      }
    };

    getUser();
  }, [fetchUser]);

  const handleProfilePicture = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the password if it's provided
    if (password && !strongPasswordRegex.test(password)) {
      setErrorMessage('Password must be at least 8 characters long and contain at least one capital letter, one small letter, one number, and one special character.');
      return;
    }

    // Create an updatedUser object with only the fields that are not empty
    const updatedUser = {
      username: username || undefined,
      password: password || undefined,
      displayName: displayName || undefined,
      profilePicture: profilePicture || undefined,
    };

    try {
      const error = await updateUser(updatedUser);
      if (!error) {
        navigate('/main');
      } else {
        setErrorMessage(error);
      }
    } catch (error) {
      setErrorMessage('Failed to update account. Please try again later.');
    }
  };

  const handleDelete = async () => {
    try {
      const error = await deleteUser();
      if (!error) {
        navigate('/main');
      } else {
        setErrorMessage(error);
      }
    } catch (error) {
      setErrorMessage('Failed to delete account. Please try again later.');
    }
  };

  const handleInputChange = () => {
    setErrorMessage('');
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.leftColumn}>
        <div className={styles.profileHeader}>
          <img src={loggedInUser.profilePicture} alt="Profile" className={styles.profilePicture} />
          <h2 className={styles.profileDisplayName}>{loggedInUser.displayName}</h2>
        </div>
        <h1 className={styles.sectionTitle}>Change your details</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" className={styles.input} value={username} onChange={(e) => { setUsername(e.target.value); handleInputChange() }} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className={styles.input} placeholder="********" value={password} onChange={(e) => { setPassword(e.target.value); handleInputChange() }} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="displayName">Display Name:</label>
            <input type="text" id="displayName" name="displayName" className={styles.input} value={displayName} onChange={(e) => { setDisplayName(e.target.value); handleInputChange() }} />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel} htmlFor="profilePicture">Upload Profile Picture:</label>
            <input type="file" id="profilePicture" name="profilePicture" className={styles.input} onChange={handleProfilePicture} />
          </div>
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
          <button type="submit" className={styles.button}>Update Profile</button>
          <button type="button" className={styles.deleteButton} onClick={handleDelete}>Delete Account</button>
        </form>
      </div>
      <div className={styles.rightColumn}>
        <h1 className={styles.sectionTitle}>{loggedInUser.displayName}'s Videos</h1>
      </div>
    </div>
  );
};

export default ProfilePage;
