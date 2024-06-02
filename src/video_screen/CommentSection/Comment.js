import './Comment.css'

function Comment() {
  return (
    <div className='commentContainer'>
            <img src="lebron.png" className="userPicture" alt=''></img>
            <div className="commentText">
                <h9>Lebron James - 16 mins ago</h9>
                <p className='lighter'>I am the GOAT</p>
            </div>
        </div>
  );
}

export default Comment;
