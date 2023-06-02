import "./SignedInHeader.css";
import { useState } from "react";
import youtubeLogo from "../../assets/youtube-logo.png";
import { RxMagnifyingGlass } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

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
            <div className="search-box">
                <input onChange={handleChange} placeholder="Search" value={searchInput} type="text"/>
                <button className="search-button"><RxMagnifyingGlass/></button>
                <button className={`clear-search-bar ${searchInput.length ? 'show' : ''}`} onClick={clearSearchBar}><RxCross1/></button>
            </div>
            <div>
                E
            </div>
        </header>
    )
}

export default SignedInHeader;