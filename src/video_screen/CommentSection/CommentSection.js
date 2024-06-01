import './CommentSection.css'
import Comment from './Comment';

function CommentSection() {
  return (
    <div class='commentSection'>217 Comments
        <div class='addCommentContainer'>
            <img src="lebron.png" class="userPicture" alt=''></img>
            <input class='textField' placeholder="Add a comment..."></input>
            <button class='cancelBtn'>Cancel</button>
            <button class='commentBtn'>Comment</button>
        </div>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  );
}

export default CommentSection;
