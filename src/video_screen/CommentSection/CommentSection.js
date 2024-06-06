import React, { useState } from 'react';
import './CommentSection.css';
import Comment from './Comment';
import initialComments from '../comments';

function CommentSection({ img, userName }) {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(initialComments);

  const handleInputChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentClick = () => {
    if (commentText) {
      const newComment = {
        commentText,
        username: userName,
        date: '1 second', 
        img, // User's profile picture
      };
      // Add the new comment to the beginning of the comments array
      setComments([newComment, ...comments]);
      setCommentText('');
    }
  };

  const handleCancelClick = () => {
    setCommentText('');
  };

  const commentList = comments.map((comment, key) => (
    <Comment {...comment} key={key} />
  ));

  return (
    <div className='commentSection'>
      <div>{comments.length} Comments</div>
      <div className='addCommentContainer'>
        <img src={img} className="userPicture" alt='' />
        <input
          className='textField'
          placeholder="Add a comment..."
          value={commentText}
          onChange={handleInputChange}
        />
        <button className='cancelBtn' onClick={handleCancelClick}>Cancel</button>
        <button className='commentBtn' onClick={handleCommentClick}>Comment</button>
      </div>
      {commentList.reverse()} {/* Reverse the order of comments */}
    </div>
  );
}

export default CommentSection;
