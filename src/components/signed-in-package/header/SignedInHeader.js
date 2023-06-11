import "./SignedInHeader.css";
import { useState } from "react";
import youtubeLogo from "../../../assets/youtube-logo.png";
import SearchBar from "../../search-bar/SearchBar";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import AccountSettings from "../account-settings/AccountSettings";

function SignedInHeader() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleAccountSettings = () => {
        setIsVisible(!isVisible);
    }

    return (
        <header className="signed-in-header">
            <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
            <div className="header-middle">
                <SearchBar/>
                <div className="header-icon">
                    <FaMicrophone/>
                </div>
            </div>
            <div className="header-end">
                <div className="header-icon create">
                    <AiOutlinePlusSquare/>
                </div>
                <div className="header-icon notifications">
                    <BsBell title="Notifications"/>
                </div>
                <div className="profile-pic" onClick={toggleAccountSettings}>
                    <p>B</p>
                    {isVisible ? <AccountSettings/> : null}
                </div>
            </div>
        </header>
    )
}

export default SignedInHeader;