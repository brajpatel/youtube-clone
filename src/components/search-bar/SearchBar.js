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

    const handleSubmit = () => {
        // navigate(`/search/${input}`);
    }
    
    return (
        <div className="search-box">
            <input onChange={handleChange} placeholder="Search" value={input} type="text"/>
            <Link to={`/search/${input}`} className="search-button" onClick={() => { setActiveTab(''); handleSubmit()}}>
                <RxMagnifyingGlass/>
            </Link>
            <button className={`clear-search-bar ${input.length ? 'show' : ''}`} onClick={clearSearchBar}><RxCross1/></button>
        </div>
    )
}

export default SearchBar;