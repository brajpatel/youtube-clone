import "./SearchedResultsPage.css";
import SearchedVideoCard from "../video-cards/searched-video-card/SearchedVideoCard";

function SearchedResultsPage() {
    return (
        <div className="searched-results-page">
            <SearchedVideoCard/>
            <SearchedVideoCard/>
            <SearchedVideoCard/>
            <SearchedVideoCard/>
            <SearchedVideoCard/>
        </div>
    )
}

export default SearchedResultsPage;