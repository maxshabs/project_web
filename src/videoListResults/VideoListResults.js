import VideoItem from "../videoItem/VideoItem";

function VideoListResults({ videos, handleDeleteVideo, loggedInUser }) {

    const videoList = videos.map((video, key) => {
        return <VideoItem {...video} key={key} handleDeleteVideo={handleDeleteVideo} loggedInUser={loggedInUser}/>
    });

    return (
        <div className="row gx-3">
            {videoList}
        </div>
    );
}

export default VideoListResults;