import './VideoItem.css';
import { Link } from 'react-router-dom';

function VideoItem({ id, title, author, views, img, uploadTime, loggedInUser, handleDeleteVideo }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6" id="">
            <div className="card">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{author}</p>
                    <p className="card-text">{views} views. {uploadTime} ago</p>
                    {loggedInUser && (
                        <div className="video-actions">
                            <button onClick={() => handleDeleteVideo(id)} className="btn" id="delete-btn"><i class="bi bi-trash3"></i></button>
                            <Link to={`/edit-video/${id}`} className="btn" id="edit-btn"><i class="bi bi-pencil"></i></Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;