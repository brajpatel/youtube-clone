import "./HomePage.css";
import { useEffect, useState } from "react";
import Preloader from "../preloader/Preloader";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPopularVideos } from "../../api/getPopularVideos";
import GeneralVideoCard from "../video-cards/general-video-card/GeneralVideoCard";

function HomePage(props) {
    const { setActiveTab } = props;
    const [loading, setLoading] = useState(true);
    const [homeVideos, setHomeVideos] = useState([]);

    useEffect(() => {
        setLoading(true);
        setVideos();
    }, []);

    const setVideos = async () => {
        setHomeVideos(await getPopularVideos());
    }
    
    const getMoreVideos = async () => {
        if(homeVideos.length >= 60) return;

        try {
            const videos = await getPopularVideos();
            setHomeVideos((prev) => [...prev, ...videos]);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        homeVideos.length ? setLoading(false) : setLoading(true);
    }, [homeVideos])
    
    return loading ?
    (
        <Preloader/>
    ) : (
        <div className="homepage" id="scrollableDiv">
            <InfiniteScroll
            className="homepage-infinite-scroll"
            dataLength={homeVideos.length}
            next={getMoreVideos}
            hasMore={true}
            scrollableTarget="scrollableDiv"
            scrollThreshold={0.92}
            >
            {homeVideos.map((item, index) => {
                return (
                    <GeneralVideoCard key={index} info={item} setActiveTab={setActiveTab}/>
                )
            })}
            </InfiniteScroll>
        </div>
    )
}

export default HomePage;