function LeftMenu() {
    return (
        <div className="col-1 col-lg-3 g-0">
            <div className="row logo">
                <button className="btn col-3" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                    <i className="bi bi-list"></i>
                </button>
            </div>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel" style={{ width: '200px' }}>
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasMenuLabel"><i class="bi bi-play-fill"></i>VidTube</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul className="list-group list-group-flush" id="offcanvasMenu">
                        <li className="list-group-item">
                            <ul className="nav flex-column">
                                <li className="nav-item mx-auto">
                                    <a className="nav-link active text-center ps-0 pe-0" aria-current="page" href="#">
                                        <i className="bi bi-house-door-fill"></i><span class="d-inline m-1">Home</span></a>
                                </li>
                                <li className="nav-item mx-auto">
                                    <a className="nav-link text-center ps-0 pe-0" href="#">
                                        <i className="bi bi-arrow-up-right-square"></i><span class="d-inline m-1">Shorts</span></a>
                                </li>
                                <li className="nav-item mx-auto">
                                    <a className="nav-link text-center ps-0 pe-0" href="#">
                                        <i className="bi bi-collection-play-fill"></i><span class="d-inline m-1">Subscriptions</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr></hr>
                    <ul className="list-group list-group-flush" id="offcanvasMenu">
                        <li className="list-group-item">
                            <ul className="nav flex-column">
                            <li className="nav-item mx-auto">
                                    <a className="nav-link text-center ps-0 pe-0" href="#">
                                        <i className="bi bi-fire"></i>
                                        <span class="m-1">Trending</span></a>
                                </li>
                                <li className="nav-item mx-auto">
                                    <a className="nav-link text-center ps-0 pe-0" href="#">
                                        <i className="bi bi-music-note"></i>
                                        <span class="m-1">Music</span></a>
                                </li>
                                <li className="nav-item mx-auto">
                                    <a className="nav-link text-center ps-0 pe-0" href="#">
                                        <i className="bi bi-controller"></i>
                                        <span className="m-1">Gaming</span></a>
                                </li>
                                <li className="nav-item mx-auto">
                                    <a className="nav-link text-center ps-0 pe-0" href="#">
                                        <i className="bi bi-newspaper"></i>
                                        <span className="m-1">News</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-1 vh-100">
                    <ul className="list-group">
                        <li className="list-group-item d-flex align-items-center">
                            <button className="btn btn-link text-decoration-none text-dark"><i className="bi bi-house-door-fill"></i>
                            </button>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <button className="btn btn-link text-decoration-none text-dark"><i className="bi bi-arrow-up-right-square"></i>
                            </button>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <button className="btn btn-link text-decoration-none text-dark"><i className="bi bi-collection-play-fill"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LeftMenu;