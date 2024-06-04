import './CommentSection.css'
import Comment from './Comment';
import comments from '../comments';


function CommentSection({img, comments}) {
  const commentList = comments.map((comments, key) => {
    return <Comment {...comments} key={key}/>
  })


  return (
    <div className='commentSection'>217 Comments
        <div className='addCommentContainer'>
            <img src={img} className="userPicture" alt=''></img>
            <input className='textField' placeholder="Add a comment..."></input>
            <button className='cancelBtn'>Cancel</button>
            <button className='commentBtn'>Comment</button>
        </div>
        {commentList}
    </div>
  );
}

export default CommentSection;
