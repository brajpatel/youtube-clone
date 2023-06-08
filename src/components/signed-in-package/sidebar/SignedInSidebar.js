import "./SignedInSidebar.css";
import { Link } from "react-router-dom";
import youtubeLogo from "../../../assets/youtube-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { RiVideoLine } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import Explore from "../../sidebar-extra/Explore";
import Support from "../../sidebar-extra/Support";

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
                            <li title="Home">
                                <MdHomeFilled className="sidebar-icon"/>
                                <p>Home</p>
                            </li>
                        </Link>

                        <li title="Subscriptions">
                            <BsCollectionPlay className="sidebar-icon"/>
                            <p>Subscriptions</p>
                        </li>
                    </ul>
                    <ul>
                        <li title="Library">
                            <MdOutlineVideoLibrary className="sidebar-icon"/>
                            <p>Library</p>
                        </li>

                        <li title="History">
                            <GrHistory className="sidebar-icon"/>
                            <p>History</p>
                        </li>

                        <li title="Your videos">
                            <RiVideoLine className="sidebar-icon"/>
                            <p>Your videos</p>
                        </li>

                        <li title="Watch Later">
                            <BiTimeFive className="sidebar-icon"/>
                            <p>Watch Later</p>
                        </li>

                        <li title="Liked videos">
                            <FiThumbsUp className="sidebar-icon"/>
                            <p>Liked videos</p>
                        </li>
                    </ul>

                    <ul>
                        <Explore/>
                    </ul>

                    <ul>
                        <Support/>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default SignedInSidebar;