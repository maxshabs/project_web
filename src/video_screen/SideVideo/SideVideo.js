import './SideVideo.css'

function SideVideo() {
    return (
        <div class="sideVideoContainer">
        <div class="row">
          <div class="col-md-4">
            <img src="pic4.jpg" class="sideVideoPic" alt=""></img>
          </div>
          <div class="col-md-8">
            <div class="sideVideoTextContainer">
              <h5 class="sideVideoTitle">Card title</h5>
              <p class="sideVideoText"> This content is a little bit longer.</p>
              <p class="sideVideoStats"><small class="text-body-secondary">16 hours ago</small></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SideVideo;
  