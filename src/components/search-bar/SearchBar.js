import "./SearchBar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function SearchBar(props) {
    const { setActiveTab } = props;
    const navigate = useNavigate();
    
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const clearSearchBar = () => {
        setInput('');
    }

    const changeTab = () => {
        input.trim() === '' ? setActiveTab('home') : setActiveTab('');
    }
    
    return (
        <div className="search-box">
            <input onChange={handleChange} placeholder="Search" value={input} type="text"/>
            <Link to={input.trim() === '' ? '/' : `/search/${input}`} className="search-button" onClick={changeTab}>
                <RxMagnifyingGlass/>
            </Link>
            <button className={`clear-search-bar ${input.length ? 'show' : ''}`} onClick={clearSearchBar}><RxCross1/></button>
        </div>
    )
}

export default SearchBar;