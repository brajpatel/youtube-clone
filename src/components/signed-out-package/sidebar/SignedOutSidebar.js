import "./SignedOutSidebar.css";
import { Link } from "react-router-dom";
import youtubeLogo from "../../../assets/youtube-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import SignInButton from "../SignInButton";
import Explore from "../../sidebar-extra/Explore";
import Support from "../../sidebar-extra/Support";

function SignedOutSidebar(props) {
    const { isOpen, toggleSidebar, activeTab, setActiveTab }  = props;

    return (
        <div className={`open-sidebar-container ${isOpen ? 'show' : 'none'}`}>
            <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="hamburger-container">
                    <RxHamburgerMenu className="burger" onClick={toggleSidebar}/>
                    <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
                </div>

                <ul>
                    <Link
                    to="/"
                    className={`page-link ${activeTab === 'home' ? 'active' : ''}`}
                    onClick={() => { toggleSidebar(); setActiveTab('home') }}
                    >
                        <li title="Home">
                            <MdHomeFilled className="sidebar-icon"/>
                            <p>Home</p>
                        </li>
                    </Link>

                    <Link
                    to="/subscriptions"
                    className={`page-link ${activeTab === 'subscriptions' ? 'active' : ''}`}
                    onClick={() => { toggleSidebar(); setActiveTab('subscriptions') }}
                    >
                        <li title="Subscriptions">
                            <BsCollectionPlay className="sidebar-icon"/>
                            <p>Subscriptions</p>
                        </li>
                    </Link>

                    <Link
                    to="/library"
                    className={`page-link ${activeTab === 'library' ? 'active' : ''}`}
                    onClick={() => { toggleSidebar(); setActiveTab('library') }}
                    >
                        <li title="Library">
                            <MdOutlineVideoLibrary className="sidebar-icon"/>
                            <p>Library</p>
                        </li>
                    </Link>
                    
                    <Link
                    to="/history"
                    className={`page-link ${activeTab === 'history' ? 'active' : ''}`}
                    onClick={() => { toggleSidebar(); setActiveTab('history') }}
                    >
                        <li title="History">
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

                    <Explore/>

                    <ul>
                        <Support/>
                    </ul>
                </ul>
            </nav>
        </div>
    )
}

export default SignedOutSidebar;