import "./HomePage.css";
import { useEffect, useState } from "react";
import Preloader from "../preloader/Preloader";
import { getPopularVideos } from "../../api/getPopularVideos";
import GeneralVideoCard from "../video-cards/general-video-card/GeneralVideoCard";

function HomePage() {
    const [loading, setLoading] = useState(true);
    const [homeVideos, setHomeVideos] = useState(video);

    // useEffect(() => {
    //     setLoading(true);

    //     const setVideos = async () => {
    //         setHomeVideos(await getPopularVideos());
    //     }

    //     setVideos();
    // }, []);

    const getVideos = async () => {
        const videos = await getPopularVideos();
        setHomeVideos((prev) => [...prev, ...videos]);
    }

    useEffect(() => {
        homeVideos.length ? setLoading(false) : setLoading(true);
    })
    
    return loading ?
    (
        <Preloader/>
    ) : (
        <div className="home-page">
            {homeVideos.map((item, index) => {
                return (
                    <GeneralVideoCard key={index} info={item}/>
                )
            })}
        </div>
    )
}

export default HomePage;