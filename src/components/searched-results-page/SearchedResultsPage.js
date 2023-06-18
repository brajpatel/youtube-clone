import "./SearchedResultsPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../preloader/Preloader";
import InfiniteScroll from "react-infinite-scroll-component";
import { getSearchResults } from "../../api/getSearchResults";
import { BsFilterLeft } from "react-icons/bs";
import SearchedVideoCard from "../video-cards/searched-video-card/SearchedVideoCard";

function SearchedResultsPage() {
    const { input } = useParams();
    const [loading, setLoading] = useState(true);
    const [searchedVideos, setSearchedVideos] = useState([]);

    useEffect(() => {
        setLoading(true);
        // getSearchedVideos();
    }, [input])

    const getSearchedVideos = async () => {
        try {
            setSearchedVideos(await getSearchResults(input));
        }
        catch(err) {
            console.log(err);
        }
    }

    const getMoreVideos = async () => {
        if(searchedVideos.length >= 30) return;

        try {
            const videos = await getSearchResults(input);
            setSearchedVideos((prev) => [...prev, ...videos]);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        searchedVideos.length ? setLoading(false) : setLoading(true);
    }, [searchedVideos])
    
    return loading ?
    (
        <Preloader/>
    ) : (
        <div className="searched-results-page" id="scrollableSearch">
            <div className="filter">
                <p><BsFilterLeft className="icon"/> Filters</p>
            </div>
            <InfiniteScroll
            className="homepage-infinite-scroll"
            dataLength={homeVideos.length}
            next={getMoreVideos}
            hasMore={true}
            scrollableTarget="scrollableSearch"
            scrollThreshold={0.92}
            >
            {searchedVideos.map((item, index) => {
                return <SearchedVideoCard key={index} info={item}/>
            })}
            </InfiniteScroll>
        </div>
    )
}

export default SearchedResultsPage;