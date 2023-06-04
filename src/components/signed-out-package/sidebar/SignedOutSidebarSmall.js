import "./SignedOutSidebarSmall.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { Link } from "react-router-dom";

function SignedOutSidebarSmall(props) {
    const { toggleSidebar } = props;

    const [activeTab, setActiveTab] = useState('home');

    return (
        <nav className="sidebar-small">
            <div className="hamburger-container" onClick={toggleSidebar}>
                <RxHamburgerMenu className="burger"/>
            </div>
            <ul>
                <Link
                to="/"
                className={`small-page-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
                >
                    <li>
                        <MdHomeFilled className="sidebar-icon"/>
                        <p>Home</p>
                    </li>
                </Link>

                <Link
                to="/subscriptions"
                className={`small-page-link ${activeTab === 'subscriptions' ? 'active' : ''}`}
                onClick={() => setActiveTab('subscriptions')}
                >
                    <li>
                        <BsCollectionPlay className="sidebar-icon"/>
                        <p>Subscriptions</p>
                    </li>
                </Link>

                <Link
                to="/library"
                className={`small-page-link ${activeTab === 'library' ? 'active' : ''}`}
                onClick={() => setActiveTab('library')}
                >
                    <li>
                        <MdOutlineVideoLibrary className="sidebar-icon"/>
                        <p>Library</p>
                    </li>
                </Link>

                <Link
                to="/history"
                className={`small-page-link ${activeTab === 'history' ? 'active' : ''}`}
                onClick={() => setActiveTab('history')}
                >
                    <li>
                        <GrHistory className="sidebar-icon"/>
                        <p>History</p>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default SignedOutSidebarSmall;