import './MainPage.css';
import '../theme.css';
import videos from '../data/videos.json';
import LeftMenu from '../leftMenu/LeftMenu';
import Search from '../search/Search';
import { useState, useEffect } from 'react';
import VideoListResults from '../videoListResults/VideoListResults';
import SignInButton from '../signInButton/SignInButton';
import UploadButton from '../uploadButton/UploadButton';
import CategoryButton from '../categoryButton/CategoryButton';
import ThemeSwitchButton from '../themeSwitchButton/ThemeSwitchButton';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function MainPage() {

    const [videoList, setVideoList] = useState(videos);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const doSearch = function (query) {
        setVideoList(videos.filter((video) => video.title.toLowerCase().includes(query.toLowerCase())));
    }

    const toggleTheme = function () {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className="container-fluid">
            <div className="row">
                    <div className="col-1 menu">
                        <LeftMenu />
                    </div>
                    <div className="col-11 main-content">
                        <div className="row align-items-center">
                            <div className="col d-flex justify-content-center">
                                <Search doSearch={doSearch} />
                            </div>
                            <div className="col-auto d-flex justify-content-center">
                                <ThemeSwitchButton toggleTheme={toggleTheme} theme={theme} />
                                <UploadButton />
                                <SignInButton />
                            </div>
                        </div>
                        <div className="categories row d-flex justify-content-center">
                            <row>
                                <CategoryButton category="All" />
                                <CategoryButton category="Music" />
                                <CategoryButton category="Sports" />
                                <CategoryButton category="Gaming" />
                                <CategoryButton category="News" />
                                <CategoryButton category="Movies" />
                                <CategoryButton category="Fashion" />
                                <CategoryButton category="Learning" />
                                <CategoryButton category="Live" />
                            </row>
                        </div>
                        <VideoListResults videos={videoList} />
                    </div>
            </div>
        </div>
    );
}

export default MainPage;