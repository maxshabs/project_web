import './Comment.css'
import { ReactComponent as Like } from '../ActionsBar/like.svg';
import { ReactComponent as Dislike } from '../ActionsBar/dislike.svg';

function Comment({commentText, username, date, img}) {
  return (
    <div className='commentContainer'>
            <img src={img} className="userPicture" alt=''></img>
            <div className="commentText">
                <h9>{username} - {date} ago</h9>
                <p className='lighter'>{commentText}</p>
                <div>
                <button id='like' className="comment-button"> <Like> </Like> </button>
                <button id='dislike' className="comment-button"> <Dislike> </Dislike> </button>
                </div>
            </div>
        </div>
  );
}

export default Comment;
