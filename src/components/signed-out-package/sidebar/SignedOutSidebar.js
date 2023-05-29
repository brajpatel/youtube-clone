import "./SignedOutSidebar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { Link } from "react-router-dom";
import SignInButton from "../SignInButton";

function SignedOutSidebar(props) {
    const { isOpen, toggleSidebar }  = props;

    return (
        <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}>
            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="hamburger-container" onClick={toggleSidebar}>
                    <RxHamburgerMenu className="burger"/>
                    <Link to="/">
                        <img src="" alt="youtube-logo"/>
                    </Link>
                </div>
                <ul>
                    <Link to="/" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <MdHomeFilled className="sidebar-icon"/>
                            <p>Home</p>
                        </li>
                    </Link>
                    <Link to="/" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <MdOutlineExplore className="sidebar-icon"/>
                            <p>Explore</p>
                        </li>
                    </Link>
                    <Link to="/subscriptions" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <BsCollectionPlay className="sidebar-icon"/>
                            <p>Subscriptions</p>
                        </li>
                    </Link>
                    <Link to="/" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <MdOutlineVideoLibrary className="sidebar-icon"/>
                            <p>Library</p>
                        </li>
                    </Link>
                    <Link to="/" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <GrHistory className="sidebar-icon"/>
                            <p>History</p>
                        </li>
                    </Link>
                    <div className="sign-in-prompt">
                        <p>Sign in to like videos, comment and subscribe.</p>
                        <SignInButton/>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default SignedOutSidebar;