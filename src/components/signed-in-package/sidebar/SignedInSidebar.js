import "./SignedInSidebar.css";
import { Link } from "react-router-dom";
import youtubeLogo from "../../../assets/youtube-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { BiCog } from "react-icons/bi";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageError } from "react-icons/bi";

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

                        <li onClick={toggleSidebar}>
                            <BsCollectionPlay className="sidebar-icon"/>
                            <p>Subscriptions</p>
                        </li>
                    </ul>
                    <ul>
                        <li onClick={toggleSidebar}>
                            <MdOutlineVideoLibrary className="sidebar-icon"/>
                            <p>Library</p>
                        </li>

                        <li onClick={toggleSidebar}>
                            <GrHistory className="sidebar-icon"/>
                            <p>History</p>
                        </li>

                        <li onClick={toggleSidebar}>
                            <BiCog className="sidebar-icon"/>
                            <p>Settings</p>
                        </li>   

                        <li onClick={toggleSidebar}>
                            <MdOutlineOutlinedFlag className="sidebar-icon"/>
                            <p>Report history</p>
                        </li>

                        <li onClick={toggleSidebar}>
                            <AiOutlineQuestionCircle className="sidebar-icon"/>
                            <p>Help</p>
                        </li>

                        <li onClick={toggleSidebar}>
                            <BiMessageError className="sidebar-icon"/>
                            <p>Send feedback</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default SignedInSidebar;