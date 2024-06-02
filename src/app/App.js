import './App.css';
import videos from '../videoItem/videos';
import LeftMenu from '../leftMenu/LeftMenu';
import Search from '../search/Search';
import { useState } from 'react';
import VideoListResults from '../videoListResults/VideoListResults';
import SignInButton from '../signInButton/SignInButton';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

    const [videoList, setVideoList] = useState(videos);

    const doSearch = function (query) {
        setVideoList(videos.filter((video) => video.title.toLowerCase().includes(query.toLowerCase())));
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <BrowserRouter>
                    <div className="col-1 menu">
                        <LeftMenu />
                    </div>
                    <div className="col-11 main-content">
                        <div className="row">
                            <div className="col">
                                <Search doSearch={doSearch} />
                            </div>
                            <div className="col">
                                <SignInButton />
                            </div>
                        </div>
                        <div className="row bg-white">
                            <button type="button" className="btn btn-light col m-3 tag">Light</button>
                            <button type="button" className="btn btn-light col m-3 tag">Light</button>
                            <button type="button" className="btn btn-light col m-3 tag">Light</button>
                            <button type="button" className="btn btn-light col m-3 tag">Light</button>
                            <button type="button" className="btn btn-light col m-3 tag">Light</button>
                            <button type="button" className="btn btn-light col m-3 tag">Light</button>
                        </div>
                        <VideoListResults videos={videoList} />
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;