import "./SearchedResultsPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearchResults } from "../../api/getSearchResults";
import { BsFilterLeft } from "react-icons/bs";
import SearchedVideoCard from "../video-cards/searched-video-card/SearchedVideoCard";

function SearchedResultsPage() {
    const { input } = useParams();
    const [loading, setLoading] = useState(true);
    const [searchedVideos, setSearchedVideos] = useState([]);

    // useEffect(() => {
    //     setLoading(true);

    //     const getSearchedVideos = async () => {
    //         setSearchedVideos(getSearchResults(input));
    //     }

    //     getSearchedVideos();
    // }, [input])

    useEffect(() => {
        searchedVideos.length ? setLoading(false) : setLoading(true);
    }, [searchedVideos])
    
    return loading ?
    (
        <div>Loading</div>
    ) : (
        <div className="searched-results-page">
            <div className="filter">
                <p><BsFilterLeft className="icon"/> Filters</p>
            </div>
            {searchedVideos.map((item, index) => {
                return <SearchedVideoCard key={index} info={item}/>
            })}
        </div>
    )
}

export default SearchedResultsPage;