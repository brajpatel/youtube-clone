import "./SignedInSidebarSmall.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { Link } from "react-router-dom";

function SignedInSidebarSmall(props) {
    const { toggleSidebar } = props;

    return (
        <nav className="side-bar-small">
            <div className="hamburger-container" onClick={toggleSidebar}>
                <RxHamburgerMenu className="burger"/>
            </div>
            <ul>
                <Link to="/" className="page-link">
                    <li>
                        <MdHomeFilled className="sidebar-icon"/>
                        <p>Home</p>
                    </li>
                </Link>
                <Link to="/subscriptions" className="page-link">
                    <li>
                        <BsCollectionPlay className="sidebar-icon"/>
                        <p>Subscriptions</p>
                    </li>
                </Link>
                <Link to="/library" className="page-link">
                    <li>
                        <MdOutlineVideoLibrary className="sidebar-icon"/>
                        <p>Library</p>
                    </li>
                </Link>
                <Link to="/history" className="page-link">
                    <li>
                        <GrHistory className="sidebar-icon"/>
                        <p>History</p>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default SignedInSidebarSmall;