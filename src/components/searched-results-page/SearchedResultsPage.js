import "./SearchedResultsPage.css";
import { BsFilterLeft } from "react-icons/bs";
import SearchedVideoCard from "../video-cards/searched-video-card/SearchedVideoCard";

function SearchedResultsPage() {
    return (
        <div className="searched-results-page">
            <div className="filter">
                <p><BsFilterLeft className="icon"/> Filters</p>
            </div>
            <SearchedVideoCard/>
            <SearchedVideoCard/>
            <SearchedVideoCard/>
            <SearchedVideoCard/>
            <SearchedVideoCard/>
        </div>
    )
}

export default SearchedResultsPage;