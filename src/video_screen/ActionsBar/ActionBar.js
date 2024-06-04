import './ActionBar.css'
import { ReactComponent as ShareIcon } from './share.svg';
import { ReactComponent as Like } from './like.svg';
import { ReactComponent as Dislike } from './dislike.svg';


function ActionBar() {
    return (
        <div className="container">
        <div className="userBar">
            <img src="lebron.png" className="img-thumbnail" alt=''></img>
            <a id="userName" href="">Mike Hawk</a>
            <button id='subscribe' className="userBar-button">Subscribe</button>
        </div>
        <div className="actionBar">
            <button id='like' className="userBar-button"><Like></Like> Like </button>
            <button id='dislike' className="userBar-button"><Dislike></Dislike> Dislike</button>
            <button className="userBar-button"><ShareIcon></ShareIcon> Share </button>
        </div>
    </div>
    );
  }
  
  export default ActionBar;