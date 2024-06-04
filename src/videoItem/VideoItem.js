import './VideoItem.css';

function VideoItem({ title, author, views, img, time}) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6" id="">
            <a className="card" href="details.html">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{author}</p>
                    <p className="card-text">{views} views. {time} ago</p>
                </div>
            </a>
        </div>
    );
}

export default VideoItem;