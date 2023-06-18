import "./HomePage.css";
import { useEffect, useState } from "react";
import Preloader from "../preloader/Preloader";
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
    
    const getVideos = async () => {
        const videos = await getPopularVideos();
        setHomeVideos((prev) => [...prev, ...videos]);
    }

    useEffect(() => {
        homeVideos.length ? setLoading(false) : setLoading(true);
    }, [homeVideos])

    const removeTab = () => {
        setActiveTab('');
    }
    
    return loading ?
    (
        <Preloader/>
    ) : (
        <div className="home-page">
            {homeVideos.map((item, index) => {
                return (
                    <GeneralVideoCard key={index} info={item} onClick={removeTab}/>
                )
            })}
        </div>
    )
}

export default HomePage;