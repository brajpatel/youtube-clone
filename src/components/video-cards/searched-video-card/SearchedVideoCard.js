import "./SearchedVideoCard.css";
import { RxDotFilled } from "react-icons/rx";

function SearchedVideoCard() {
    return (
        <div>
            <div>
                <div>Image</div>
                <p>11:29</p>
            </div>

            <div>
                <div>
                    <p className="video-title">This Game made my PC blow up...</p>
                    <p className='views-date'>350k views <RxDotFilled/> 4 days ago</p>
                </div>
                <div>
                    <div>V</div>
                    <p className='channel-name'>Vienna</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        </div>
    )
}

export default SearchedVideoCard;