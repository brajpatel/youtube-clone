import "./SignedOutHeader.css";
import youtubeLogo from "../../assets/youtube-logo.png";
import { RxMagnifyingGlass } from "react-icons/rx";
import SignInButton from "./SignInButton";

function SignedOutHeader() {
    return (
        <header>
            <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
            <div className="search-box">
                <input type="text"/>
                <button><RxMagnifyingGlass/></button>
            </div>
            <SignInButton/>
        </header>
    )
}

export default SignedOutHeader;