import "./SignedInHeader.css";
import { useState } from "react";
import youtubeLogo from "../../assets/youtube-logo.png";
import SearchBar from "../SearchBar";

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
            <SearchBar/>
            <div>
                E
            </div>
        </header>
    )
}

export default SignedInHeader;