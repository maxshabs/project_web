import React, { useState } from 'react';
import './CommentSection.css';
import Comment from './Comment';

function CommentSection({ img, userName, videoId, initialComments, updateComments }) {
  const [commentText, setCommentText] = useState('');

  const handleInputChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentClick = () => {
    console.log('Adding comment:', commentText); // Check if handleCommentClick is called
    if (commentText) {
      const newComment = {
        id: initialComments.length + 1,
        text: commentText,
        username: userName,
        date: '1 second',
        img,
        videoId,
      };

      updateComments(videoId, newComment);
      setCommentText('');
    }
  };

  const handleCancelClick = () => {
    setCommentText('');
  };

  // Get comments for the current videoId
  const videoComments = initialComments.find((commentData) => commentData.videoId === videoId)?.comments || [];

  const commentList = videoComments.map((comment, key) => (
    <Comment {...comment} key={key} />
  ));

  return (
    <div className='commentSection'>
      <div>{videoComments.length} Comments</div>
      <div className='addCommentContainer'>
        <img src={img} className="userPicture" alt='' />
        <input className='textField' placeholder="Add a comment..." value={commentText} onChange={handleInputChange} />
        <button className='cancelBtn' onClick={handleCancelClick}>Cancel</button>
        <button className='commentBtn' onClick={handleCommentClick}>Comment</button>
      </div>
      {commentList.reverse()}
    </div>
  );
}

export default CommentSection;
