import './SideVideo.css'

function SideVideo({ title, author, views, image }) {
    return (
        <div className="sideVideoContainer">
        <div className="row">
          <div className="col-md-4">
            <img src={image} className="sideVideoPic" alt=""></img>
          </div>
          <div className="col-md-8">
            <div className="sideVideoTextContainer">
              <h5 className="sideVideoTitle">{title}</h5>
              <p className="sideVideoText"> {author}</p>
              <p className="sideVideoStats"><small className="text-body-secondary">{views} views - 1 day ago</small></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SideVideo;
  