import './App.css';
import VideoItem from '../videoItem/VideoItem';
import videos from '../videoItem/videos';
import LeftMenu from '../leftMenu/LeftMenu';

function App() {

    const videoList = videos.map((video, key) => {
        return <VideoItem {...video} key={key} />
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <LeftMenu />
                <div className="col main-content">
                    <div className="row bg-white justify-content-center">
                        <div className="col-11">
                            <div className="input-group mb-3 p-2">
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"></input>
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                            </div>
                            <button className="sign-in-button" type="button">
                                <i className="bi bi-person"></i>Sign in
                            </button>
                        </div>
                    </div>
                    <div className="row"></div>
                    <div className="row gx-3">
                        {videoList}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;