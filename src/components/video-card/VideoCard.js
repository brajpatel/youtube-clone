import './VideoCard.css';
import { RxDotFilled } from "react-icons/rx";

function VideoCard() {
    return (
        <div className="card">
            <div className="thumbnail">
                Image
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