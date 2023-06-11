import "./SignedOutHeader.css";
import { useState } from "react";
import youtubeLogo from "../../../assets/youtube-logo.png";
import SearchBar from "../../search-bar/SearchBar";
import { HiOutlineDotsVertical } from "react-icons/hi";
import GeneralSettings from "../general-settings/GeneralSettings";
import SignInButton from "../sign-in-button/SignInButton";

function SignedOutHeader(props) {
    const { setActiveTab } = props;

    const [isVisible, setIsVisible] = useState(true);

    const toggleAccountSettings = () => {
        setIsVisible(!isVisible);
    }

    return (
        <header className="signed-out-header">
            <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
            <SearchBar setActiveTab={setActiveTab}/>
            <div className="header-end">
                <div className="header-icon settings">
                    <HiOutlineDotsVertical onClick={toggleAccountSettings}/>
                    {isVisible ? <GeneralSettings/> : null}
                </div>
                <SignInButton/>
            </div>
        </header>
    )
}

export default SignedOutHeader;