import "./SignedInSidebarSmall.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

function SignedInSidebarSmall(props) {
    const { toggleSidebar } = props;

    return (
        <nav className="side-bar-small">
            <div className="hamburger-container" onClick={toggleSidebar}>
                <RxHamburgerMenu className="burger"/>
            </div>
            <ul>
                <Link to="/" className="small-page-link">
                    <li>
                        <MdHomeFilled className="sidebar-icon"/>
                        <p>Home</p>
                    </li>
                </Link>
            
                <li>
                    <BsCollectionPlay className="sidebar-icon"/>
                    <p>Subscriptions</p>
                </li>

                <li>
                    <MdOutlineVideoLibrary className="sidebar-icon"/>
                    <p>Library</p>
                </li>
            </ul>
        </nav>
    )
}

export default SignedInSidebarSmall;