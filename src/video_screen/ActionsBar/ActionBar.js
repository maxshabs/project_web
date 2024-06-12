import React from 'react';
import './ActionBar.css';
import { ReactComponent as ShareIcon } from './share.svg';
import { ReactComponent as Like } from './like.svg';
import { ReactComponent as Dislike } from './dislike.svg';
import { ReactComponent as Whatsapp } from './whatsapp.svg';
import { ReactComponent as Facebook } from './facebook.svg';
import { ReactComponent as Gmail } from './gmail.svg';



function ActionBar({
  userName,
  img,
  isLiked,
  setIsLiked,
  isDisliked,
  setIsDisliked,
  isSubscribed,
  setIsSubscribed,
}) {
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
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="container">
      <div className="userBar">
        <img src={img} className="img-thumbnail" alt=""></img>
        <a id="userName">{userName}</a>
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
        <div class="dropdown">
          <a class="userBar-button dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Share
          </a>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><Whatsapp></Whatsapp> Whatsapp</a></li>
            <li><a class="dropdown-item" href="#"><Facebook></Facebook> Facebook</a></li>
            <li><a class="dropdown-item" href="#"><Gmail></Gmail> Gmail</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActionBar;
