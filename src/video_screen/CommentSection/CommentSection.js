import React, { useState } from 'react';
import './CommentSection.css';
import Comment from './Comment';
import defaultImg from '../anonymous-user.jpg' // Import the default image

function CommentSection({ videoId, initialComments, updateComments, loggedInUser, calculateTimeAgo }) {
  const [commentText, setCommentText] = useState('');

  const handleInputChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentClick = () => {
    if (!loggedInUser) return; // Prevent commenting if the user is not logged in

    if (commentText) {
      const newComment = {
        id: initialComments.find(commentData => commentData.videoId === videoId)?.comments.length + 1 || 1,
        text: commentText,
        username: loggedInUser.displayName, // Use logged-in user's name
        date: new Date().toISOString(),
        img: loggedInUser.profilePicture, // Use logged-in user's image
        videoId,
      };

      const updatedComments = initialComments.map((commentData) =>
        commentData.videoId === videoId
          ? { ...commentData, comments: [...commentData.comments, newComment] }
          : commentData
      );

      updateComments(videoId, updatedComments.find(data => data.videoId === videoId).comments);
      setCommentText('');
    }
  };

  const handleCancelClick = () => {
    setCommentText('');
  };

  const handleEditComment = (commentId, newText) => {
    const updatedComments = initialComments.map((commentData) => {
      if (commentData.videoId === videoId) {
        return {
          ...commentData,
          comments: commentData.comments.map((comment) =>
            comment.id === commentId ? { ...comment, text: newText } : comment
          ),
        };
      }
      return commentData;
    });

    updateComments(videoId, updatedComments.find(data => data.videoId === videoId).comments);
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = initialComments.map((commentData) => {
      if (commentData.videoId === videoId) {
        return {
          ...commentData,
          comments: commentData.comments.filter((comment) => comment.id !== commentId),
        };
      }
      return commentData;
    });

    updateComments(videoId, updatedComments.find(data => data.videoId === videoId).comments);
  };

  // Get comments for the current videoId and ensure it's an array
  const videoComments = initialComments.find((commentData) => commentData.videoId === videoId)?.comments || [];

  const commentList = videoComments.map((comment, key) => (
    <Comment
      {...comment}
      key={key}
      onEdit={handleEditComment}
      onDelete={handleDeleteComment}
      loggedInUser={loggedInUser}
      calculateTimeAgo={calculateTimeAgo}
    />
  ));

  return (
    <div className='commentSection'>
      <div>{videoComments.length} Comments</div>
      <div className='addCommentContainer'>
        <img src={loggedInUser ? loggedInUser.profilePicture : defaultImg} className="userPicture" alt='' />
        <input
          className='textField'
          placeholder={loggedInUser ? "Add a comment..." : "Log in to comment"}
          value={commentText}
          onChange={handleInputChange}
          disabled={!loggedInUser}
        />
        <button className='cancelBtn' onClick={handleCancelClick}>Cancel</button>
        <button className='commentBtn' onClick={handleCommentClick} disabled={!loggedInUser}>Comment</button>
      </div>
      {commentList.reverse()}
    </div>
  );
}

export default CommentSection;
