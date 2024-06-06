import React, { useState } from 'react';
import './ActionBar.css';
import { ReactComponent as ShareIcon } from './share.svg';
import { ReactComponent as Like } from './like.svg';
import { ReactComponent as Dislike } from './dislike.svg';

function ActionBar() {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (isDisliked) {
      setIsDisliked(false);
    }
  };

  const handleDislikeClick = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) {
      setIsLiked(false);
    }
  };

  const handleSubscribeClick = () => {
    setIsSubscribed(!isSubscribed); // Toggle subscribe state
  };

  return (
    <div className="container">
      <div className="userBar">
        <img src="lebron.png" className="img-thumbnail" alt=''></img>
        <a id="userName" href="">Mike Hawk</a>
        <button
          id='subscribe'
          className={`subscribe-button${isSubscribed ? ' subscribed' : ''}`}
          onClick={handleSubscribeClick}
        >
          {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>
      </div>
      <div className="actionBar">
        <button
          id='like'
          className={`userBar-button${isLiked ? ' liked' : ''}`}
          onClick={handleLikeClick}
        >
          <Like /> Like
        </button>
        <button
          id='dislike'
          className={`userBar-button${isDisliked ? ' disliked' : ''}`}
          onClick={handleDislikeClick}
        >
          <Dislike /> Dislike
        </button>
        <button className="userBar-button">
          <ShareIcon /> Share
        </button>
      </div>
    </div>
  );
}

export default ActionBar;
