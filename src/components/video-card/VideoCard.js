import './VideoCard.css';
import { RxDotFilled } from "react-icons/rx";

function VideoCard() {
    return (
        <div className="video-card">
            <div className="thumbnail">
                <p>Image</p>
                <p className='duration'>11:29</p>
            </div>
            <div className='bottom'>
                <div className='channel-icon'>
                    <p>V</p>
                </div>

                <div className='info'>
                    <p>This Game made my PC blow up...</p>
                    <p className='channel-name'>Vienna</p>
                    <p className='views-date'>350k views <RxDotFilled/> 4 days ago</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;