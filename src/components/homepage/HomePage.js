import "./HomePage.css";
import { useState } from "react";
import GeneralVideoCard from "../video-cards/general-video-card/GeneralVideoCard";

function HomePage() {
    const [videos, setVideos] = useState([]);
    
    return (
        <div className="home-page">
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
            <GeneralVideoCard/>
        </div>
    )
}

export default HomePage;