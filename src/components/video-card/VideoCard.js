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
                <div className='profile'>
                    P
                </div>

                <div className='info'>
                    <p className='channel-name'>Vienna</p>
                    <p className='views-date'>350k views <RxDotFilled/> 4 days ago</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;