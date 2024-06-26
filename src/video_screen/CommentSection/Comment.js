import React, { useState, useEffect } from 'react';
import './Comment.css';
import { ReactComponent as Like } from '../ActionsBar/like.svg';
import { ReactComponent as Dislike } from '../ActionsBar/dislike.svg';

function Comment({ id, text, username, date, img, onEdit, onDelete, loggedInUser, calculateTimeAgo }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const [displayTime, setDisplayTime] = useState(date);


  useEffect(() => {
    setDisplayTime(calculateTimeAgo(date));
    const interval = setInterval(() => {
      setDisplayTime(calculateTimeAgo(date));
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [date, calculateTimeAgo]);

  const handleLikeClick = () => {
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislikeClick = () => {
    setDisliked(!disliked);
    setLiked(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  
  const handleSaveClick = async () => {
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: editText }),
      });
      if (response.ok) {
        onEdit(id, editText);
        setIsEditing(false);
      } else {
        throw new Error('Failed to update comment');
      }
    } catch (error) {
      console.error('Error updating comment:', error.message);
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onDelete(id);
      } else {
        throw new Error('Failed to delete comment');
      }
    } catch (error) {
      console.error('Error deleting comment:', error.message);
    }
  };
  const handleEditTextChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className='commentContainer'>
      <img src={img} className="userPicture" alt='' />
      <div className="commentText">
        <p>{username} - {displayTime}</p>
        {isEditing ? (
          <input
            className='editTextField'
            value={editText}
            onChange={handleEditTextChange}
          />
        ) : (
          <p className='lighter'>{text}</p>
        )}
        <div>
          <button
            id='liked'
            className={`comment-button ${liked ? 'liked' : ''}`}
            onClick={handleLikeClick}
          >
            <Like />
          </button>
          <button
            id='disliked'
            className={`comment-button ${disliked ? 'disliked' : ''}`}
            onClick={handleDislikeClick}
          >
            <Dislike />
          </button>
          {loggedInUser && 
          <>
            {isEditing ? (
              <button className='comment-button' onClick={handleSaveClick}>Save</button>
            ) : (
              <button className='comment-button' onClick={handleEditClick}>Edit</button>
            )}
            <button className='comment-button' onClick={handleDeleteClick}>Delete</button>
          </>
        }   
        </div>
      </div>
    </div>
  );
}

export default Comment;
