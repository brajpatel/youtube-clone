import "./SignedInHeader.css";
import { useState } from "react";
import youtubeLogo from "../../assets/youtube-logo.png";
import SearchBar from "../SearchBar";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsBell } from "react-icons/bs";

function SignedInHeader() {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const clearSearchBar = () => {
        setSearchInput('');
    }

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