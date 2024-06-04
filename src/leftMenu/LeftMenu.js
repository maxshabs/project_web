import './LeftMenu.css';
import Logo from '../logo.png';

function LeftMenu() {
    return (
        <div className="menu">
            <button className="menu-btn" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                    <i className="bi bi-list"></i>
            </button>
            <ul className="nav flex-column menu-list">
                <li className="menu-item">
                    <a className="menu-link" href="#">
                        <i className="bi bi-house-door-fill"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="#">
                        <i className="bi bi-arrow-up-right-square-fill"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="#">
                        <i className="bi bi-collection-play-fill"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="#">
                        <i className="bi bi-person-fill"></i>
                        </a>
                </li>
            </ul>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel" style={{ width: '200px' }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasMenuLabel">
                        <img src={Logo} alt="LogoImg" className="logo-image" />
                    </h5>
                    <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x-lg"></i></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group list-group-flush offcanvas-list" id="offcanvasMenu">
                        <li className="list-group-item">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i class="bi bi-house-door"></i>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i className="bi bi-arrow-up-right-square"></i>
                                        <span>Shorts</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i className="bi bi-collection-play"></i>
                                        <span>Subscriptions</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i className="bi bi-person"></i>
                                        <span>You</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i className="bi bi-clock-history"></i>
                                        <span>History</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    <ul className="list-group list-group-flush offcanvas-list" id="offcanvasMenu">
                        <li className="list-group-item">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i className="bi bi-fire"></i>
                                        <span>Trending</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i className="bi bi-music-note"></i>
                                        <span>Music</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i className="bi bi-controller"></i>
                                        <span>Gaming</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i className="bi bi-newspaper"></i>
                                        <span>News</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i className="bi bi-trophy"></i>
                                        <span>Sports</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i className="bi bi-mic"></i>
                                        <span>Podcasts</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    <ul className="list-group list-group-flush offcanvas-list" id="offcanvasMenu">
                        <li className="list-group-item">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i class="bi bi-gear"></i>
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i class="bi bi-question-circle"></i>
                                        <span>Help</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ps-0 pe-0" href="#">
                                        <i class="bi bi-chat-dots"></i>
                                        <span>Feedback</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LeftMenu;
