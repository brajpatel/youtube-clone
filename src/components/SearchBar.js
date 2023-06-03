import "./SearchBar.css";
import { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function SearchBar() {
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
            <button className="search-button"><RxMagnifyingGlass/></button>
            <button className={`clear-search-bar ${searchInput.length ? 'show' : ''}`} onClick={clearSearchBar}><RxCross1/></button>
        </div>
    )
}

export default SearchBar;