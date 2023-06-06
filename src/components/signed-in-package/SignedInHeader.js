import "./SignedInHeader.css";
import youtubeLogo from "../../assets/youtube-logo.png";
import SearchBar from "../SearchBar";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsBell } from "react-icons/bs";

function SignedInHeader() {
    return (
        <header className="signed-in-header">
            <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
            <div className="header-middle">
                <SearchBar/>
                <div>
                    <FaMicrophone/>
                </div>
            </div>
            <div className="header-end">
                <AiOutlinePlusSquare/>
                <BsBell/>
                <div>
                    B
                </div>
            </div>
        </header>
    )
}

export default SignedInHeader;