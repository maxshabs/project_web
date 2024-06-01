import React from 'react';
import './VideoScreen.css';
import SideVideo from './SideVideo/SideVideo';
import CommentSection from './CommentSection/CommentSection';

const VideoScreen = () => {
    return (
      <body>
        <div class="container-fluid">
        <div id="searchBar">
                        <input></input>
                        <button>Search</button>
                    </div>
            <div class="row">
                <div class="col-2 bg-light vh-100">
                      <ul class="list-group">
                        <li class="list-group-item">An active item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                      </ul>
                </div>
                <div class="col-7">
                    <div>
                        <div>
                            <img class="thumbnail" src="pic3.jpg" alt=''></img>
                            <div id="title">This is the best Video Title</div>
                            <div class="container">
                                <div class="userBar">
                                    <img src="lebron.png" class="img-thumbnail" alt=''></img>
                                    <a id="userName" href="">User Name</a>
                                    <button class="userBar-button">Subscribe</button>
                                </div>
                                <div class="actionBar">
                                    <button class="userBar-button">Like</button>
                                    <button class="userBar-button">Dislike</button>
                                    <button class="userBar-button">Share</button>
                                </div>
                            </div>
                            <div id="description">
                                    <div id="stats">100M views - 1 day ago</div>
                                    <div>this is the description</div>
                            </div>
                            <CommentSection/>
                        </div>
                    </div>
                
                </div>
                <div class="col-3">

                  <SideVideo/>

                  <SideVideo/>

                  <SideVideo/>

                </div>
            </div>    
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
    );
  };

export default VideoScreen