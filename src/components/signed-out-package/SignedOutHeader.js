import "./SignedOutHeader.css";
import youtubeLogo from "../../assets/youtube-logo.png";
import SearchBar from "../search-bar/SearchBar";
import { HiOutlineDotsVertical } from "react-icons/hi";
import SignInButton from "./SignInButton";

function SignedOutHeader(props) {
    const { setActiveTab } = props;

    return (
        <header className="signed-out-header">
            <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
            <SearchBar setActiveTab={setActiveTab}/>
            <div className="header-end">
                <div className="header-icon settings">
                    <HiOutlineDotsVertical/>
                </div>
                <SignInButton/>
            </div>
        </header>
    )
}

export default SignedOutHeader;