import "./SearchBar.css";
import { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function SearchBar(props) {
    const { setActiveTab } = props;
    
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const clearSearchBar = () => {
        setSearchInput('');
    }
    
    return (
        <div className="search-box">
            <input onChange={handleChange} placeholder="Search" value={searchInput} type="text"/>
            <Link to="/" className="search-button" onClick={() => setActiveTab('')}>
                <RxMagnifyingGlass/>
            </Link>
            <button className={`clear-search-bar ${searchInput.length ? 'show' : ''}`} onClick={clearSearchBar}><RxCross1/></button>
        </div>
    )
}

export default SearchBar;