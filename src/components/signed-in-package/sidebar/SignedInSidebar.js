import "./SignedInSidebar.css";
import { Link } from "react-router-dom";
import youtubeLogo from "../../../assets/youtube-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { GoVideo } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import Explore from "../../signed-out-package/Explore";
import Support from "../../signed-out-package/Support";

function SignedInSidebar(props) {
    const { isOpen, toggleSidebar }  = props;

    return (
        <div className={`open-sidebar-container ${isOpen ? 'show' : 'none'}`}>
            <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="hamburger-container">
                    <RxHamburgerMenu className="burger" onClick={toggleSidebar}/>
                    <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
                </div>

                <div className="sidebar-inner">
                    <ul>
                        <Link
                        to="/"
                        className="page-link"
                        onClick={toggleSidebar}
                        >
                            <li>
                                <MdHomeFilled className="sidebar-icon"/>
                                <p>Home</p>
                            </li>
                        </Link>

                        <li>
                            <BsCollectionPlay className="sidebar-icon"/>
                            <p>Subscriptions</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <MdOutlineVideoLibrary className="sidebar-icon"/>
                            <p>Library</p>
                        </li>

                        <li>
                            <GrHistory className="sidebar-icon"/>
                            <p>History</p>
                        </li>
                        <li>
                            <GoVideo className="sidebar-icon"/>
                            <p>Your videos</p>
                        </li>
                        <li>
                            <BiTimeFive className="sidebar-icon"/>
                            <p>Watch later</p>
                        </li>
                        <li>
                            <FiThumbsUp className="sidebar-icon"/>
                            <p>Liked videos</p>
                        </li>
                    </ul>
                    <Explore/>
                    <ul>
                        <Support/>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default SignedInSidebar;