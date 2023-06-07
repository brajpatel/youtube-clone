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
                    <li title="Home">
                        <MdHomeFilled className="sidebar-icon"/>
                        <p>Home</p>
                    </li>
                </Link>
            
                <li title="Subscriptions">
                    <BsCollectionPlay className="sidebar-icon"/>
                    <p>Subscriptions</p>
                </li>

                <li title="Library">
                    <MdOutlineVideoLibrary className="sidebar-icon"/>
                    <p>Library</p>
                </li>
            </ul>
        </nav>
    )
}

export default SignedInSidebarSmall;