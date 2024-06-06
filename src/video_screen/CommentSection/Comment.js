import React, { useState } from 'react';
import './Comment.css';
import { ReactComponent as Like } from '../ActionsBar/like.svg';
import { ReactComponent as Dislike } from '../ActionsBar/dislike.svg';

function Comment({ text, username, date, img }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLiked(true);
      setDisliked(false);
    } else {
      setLiked(false);
    }
  };

  const handleDislikeClick = () => {
    if (!disliked) {
      setDisliked(true);
      setLiked(false);
    } else {
      setDisliked(false);
    }
  };

  return (
    <div className='commentContainer'>
      <img src={img} className="userPicture" alt='' />
      <div className="commentText">
        <p>{username} - {date} ago</p>
        <p className='lighter'>{text}</p>
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
        </div>
      </div>
    </div>
  );
}

export default Comment;
