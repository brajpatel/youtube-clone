import "./HomePage.css";
import { useEffect, useState } from "react";
import { getPopularVideos } from "../../api/getPopularVideos";
import GeneralVideoCard from "../video-cards/general-video-card/GeneralVideoCard";

function HomePage() {
    const [homeVideos, setHomeVideos] = useState([]);

    // useEffect(() => {
    //     const setVideos = async () => {
    //         setHomeVideos(await getPopularVideos());
    //     }

    //     setVideos();
    // }, []);

    const getVideos = async () => {
        const videos = await getPopularVideos();
        setHomeVideos((prev) => [...prev, ...videos]);
    }
    
    return (
        <div className="home-page">
            
        </div>
    )
}

export default HomePage;