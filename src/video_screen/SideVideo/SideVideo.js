import './SideVideo.css'

function SideVideo({ video }) {
    return (
        <div class="sideVideoContainer">
        <div class="row">
          <div class="col-md-4">
            <img src="pic4.jpg" class="sideVideoPic" alt=""></img>
          </div>
          <div class="col-md-8">
            <div class="sideVideoTextContainer">
              <h5 class="sideVideoTitle">{video.title}</h5>
              <p class="sideVideoText"> {video.author}</p>
              <p class="sideVideoStats"><small class="text-body-secondary">{video.time} ago</small></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SideVideo;
  