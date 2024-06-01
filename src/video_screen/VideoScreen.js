import React from 'react';
import './VideoScreen.css';
import SideVideo from './SideVideo/SideVideo';
import CommentSection from './CommentSection/CommentSection';

const VideoScreen = ( {video} ) => {

  const videos = [{title: 'best vid ever', author: 'Mike Hawk'},
                  {title: 'best job ever', author: 'Mike need'},
                  {title: 'worst vid ever', author: 'tony Hawk'}];
const videoList = videos.map((video, key) => {
  return <SideVideo title="t" author="b"/>
})

    return (
      <body>
        <div className="container-fluid">
        <div id="searchBar">
                        <input></input>
                        <button>Search</button>
                    </div>
            <div className="row">
                <div className="col-2 bg-light vh-100">
                      <ul className="list-group">
                        <li className="list-group-item">An active item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                      </ul>
                </div>
                <div className="col-7">
                    <div>
                        <div>
                            <img className="thumbnail" src="pic3.jpg" alt=''></img>
                            <div id="title">{video.title}</div>
                            <div className="container">
                                <div className="userBar">
                                    <img src="lebron.png" className="img-thumbnail" alt=''></img>
                                    <a id="userName" href="">{video.author}</a>
                                    <button className="userBar-button">Subscribe</button>
                                </div>
                                <div className="actionBar">
                                    <button className="userBar-button">Like</button>
                                    <button className="userBar-button">Dislike</button>
                                    <button className="userBar-button">Share</button>
                                </div>
                            </div>
                            <div id="description">
                                    <div id="stats">{video.views} views - {video.time} ago</div>
                                    <div>{video.description}</div>
                            </div>
                            <CommentSection/>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                  {videoList}
                </div>
            </div>    
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
    );
  };

export default VideoScreen