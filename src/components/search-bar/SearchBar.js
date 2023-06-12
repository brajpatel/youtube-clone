import "./SearchBar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function SearchBar(props) {
    const { setActiveTab } = props;
    const navigate = useNavigate();
    
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const clearSearchBar = () => {
        setSearchInput('');
    }

    const handleSubmit = () => {
        // navigate(`/search/${input}`);
    }
    
    return (
        <div className="search-box">
            <input onChange={handleChange} placeholder="Search" value={searchInput} type="text"/>
            <div className="search-button" onClick={() => { setActiveTab(''); handleSubmit()}}>
                <RxMagnifyingGlass/>
            </div>
            <button className={`clear-search-bar ${searchInput.length ? 'show' : ''}`} onClick={clearSearchBar}><RxCross1/></button>
        </div>
    )
}

export default SearchBar;