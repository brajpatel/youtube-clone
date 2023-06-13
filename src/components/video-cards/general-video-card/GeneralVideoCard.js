import './GeneralVideoCard.css';
import { RxDotFilled } from "react-icons/rx";

function GeneralVideoCard(props) {
    const { info } = props;

    return (
        <div className="general-video-card">
            <div className="thumbnail">
                <img src={info.snippet.thumbnails.medium.url}/>
                <p className='duration'>11:29</p>
            </div>
            <div className='bottom'>
                <div className='channel-icon'>
                    <p>V</p>
                </div>

                <div className='info'>
                    <p className='video-title'>{info.snippet.title}</p>
                    <p className='channel-name'>{info.snippet.channelTitle}</p>
                    <p className='views-date'>350k views <RxDotFilled/> 4 days ago</p>
                </div>
            </div>
        </div>
    )
}

export default GeneralVideoCard;