import './CommentSection.css'
import Comment from './Comment';

function CommentSection() {
  return (
    <div className='commentSection'>217 Comments
        <div className='addCommentContainer'>
            <img src="lebron.png" className="userPicture" alt=''></img>
            <input className='textField' placeholder="Add a comment..."></input>
            <button className='cancelBtn'>Cancel</button>
            <button className='commentBtn'>Comment</button>
        </div>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  );
}

export default CommentSection;
