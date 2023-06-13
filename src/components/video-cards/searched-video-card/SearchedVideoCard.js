import "./SearchedVideoCard.css";
import { RxDotFilled } from "react-icons/rx";
import { HiOutlineDotsVertical } from "react-icons/hi";

function SearchedVideoCard() {
    return (
        <div className="searched-video-card">
            <div className="thumbnail">
                <p>Image</p>
                <p className="duration">11:29</p>
            </div>

            <div className="info">
                <div className="video-details">
                    <p className="video-title">This Game made my PC blow up...</p>
                    <p className='views-date'>350k views <RxDotFilled/> 4 days ago</p>
                </div>
                <div className="channel-details">
                    <div className="channel-icon">
                        <p>V</p>
                    </div>
                    <p className='channel-name'>Vienna</p>
                </div>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>

            <p className="video-actions"><HiOutlineDotsVertical/></p>
        </div>
    )
}

export default SearchedVideoCard;