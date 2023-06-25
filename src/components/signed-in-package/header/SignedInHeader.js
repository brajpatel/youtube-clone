import "./SignedInHeader.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import youtubeLogo from "../../../assets/youtube-logo.png";
import SearchBar from "../../search-bar/SearchBar";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import AccountSettings from "../account-settings/AccountSettings";

function SignedInHeader() {
    const { user } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const toggleAccountSettings = () => {
        setIsVisible(!isVisible);
    }

    return (
        <header className="signed-in-header">
            <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
            <div className="header-middle">
                <SearchBar setActiveTab={setActiveTab}/>
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
                    <img className="profile-pic" src={user.photo}/>
                    {isVisible ? <AccountSettings/> : null}
                </div>
            </div>
        </header>
    )
}

export default SignedInHeader;