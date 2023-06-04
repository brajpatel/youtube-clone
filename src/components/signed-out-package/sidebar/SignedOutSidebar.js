import "./SignedOutSidebar.css";
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
import { Link } from "react-router-dom";
import SignInButton from "../SignInButton";

function SignedOutSidebar(props) {
    const { isOpen, toggleSidebar }  = props;

    return (
        <div className={`open-sidebar-container ${isOpen ? 'show' : 'none'}`}>
            <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="hamburger-container">
                    <RxHamburgerMenu className="burger" onClick={toggleSidebar}/>
                    <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
                </div>
                <ul>
                    <Link to="/" className="page-link active" onClick={toggleSidebar}>
                        <li>
                            <MdHomeFilled className="sidebar-icon"/>
                            <p>Home</p>
                        </li>
                    </Link>
                    <Link to="/subscriptions" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <BsCollectionPlay className="sidebar-icon"/>
                            <p>Subscriptions</p>
                        </li>
                    </Link>
                    <Link to="/library" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <MdOutlineVideoLibrary className="sidebar-icon"/>
                            <p>Library</p>
                        </li>
                    </Link>
                    <Link to="/history" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <GrHistory className="sidebar-icon"/>
                            <p>History</p>
                        </li>
                    </Link>
                    <div className="sign-in-prompt-container">
                        <div className="sign-in-prompt">
                            <p>Sign in to like videos, comment and subscribe.</p>
                            <SignInButton/>
                        </div>
                    </div>
                    <Link to="/" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <BiCog className="sidebar-icon"/>
                            <p>Settings</p>
                        </li>   
                    </Link>

                    <Link to="/" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <MdOutlineOutlinedFlag className="sidebar-icon"/>
                            <p>Report history</p>
                        </li>
                    </Link>
                    <Link to="/" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <AiOutlineQuestionCircle className="sidebar-icon"/>
                            <p>Help</p>
                        </li>
                    </Link>
                    <Link to="/" className="page-link" onClick={toggleSidebar}>
                        <li>
                            <BiMessageError className="sidebar-icon"/>
                            <p>Send feedback</p>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default SignedOutSidebar;