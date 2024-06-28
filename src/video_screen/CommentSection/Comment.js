import React, { useState, useEffect } from 'react';
import './Comment.css';
import { ReactComponent as Like } from '../ActionsBar/like.svg';
import { ReactComponent as Dislike } from '../ActionsBar/dislike.svg';

function Comment({ _id, text, username, date, img, onEdit, onDelete, loggedInUser, calculateTimeAgo, refreshComments}) {
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

  useEffect(() => {
    if (!isEditing) {
      setEditText(text); // Reset edit text to original comment text when not editing
    }
  }, [isEditing, text]);

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

  const handleEditSaveClick = async () => {
    console.log("id is: ", _id)
    console.log("text is: ", editText)
    try {
      const response = await fetch(`http://localhost:12345/api/users/${_id}/comments`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ id: _id , text: editText }),
      });
      if (response.ok) {
        onEdit();
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
      const response = await fetch(`http://localhost:12345/api/users/${_id}/comments`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onDelete();
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
            _id='liked'
            className={`comment-button ${liked ? 'liked' : ''}`}
            onClick={handleLikeClick}
          >
            <Like />
          </button>
          <button
            _id='disliked'
            className={`comment-button ${disliked ? 'disliked' : ''}`}
            onClick={handleDislikeClick}
          >
            <Dislike />
          </button>
          {/* allow user to perform actions only on his own comments (if comment username matches user displayname) */}
          {loggedInUser && loggedInUser.displayName === username && (
            <>
              {isEditing ? (
                <button className='comment-button' onClick={handleEditSaveClick}>Save</button>
              ) : (
                <button className='comment-button' onClick={handleEditClick}>Edit</button>
              )}
              <button className='comment-button' onClick={handleDeleteClick}>Delete</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
