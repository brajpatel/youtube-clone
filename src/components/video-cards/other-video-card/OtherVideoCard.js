import './OtherVideoCard.css';
import { Link } from 'react-router-dom';
import  { formatVideoDuration } from '../../../utils/formatVideoDuration';
import  { formatViewCount } from '../../../utils/formatViewCount';
import  { formatVideoDate } from '../../../utils/formatVideoDate';
import { RxDotFilled } from "react-icons/rx";
import { HiOutlineDotsVertical } from "react-icons/hi";

function OtherVideoCard(props) {
    const { info } = props;

    return (
        <Link
        to={`/watch/${info.id}`}
        state={info}
        className="other-video-link"
        >
            <div className='other-video-card'>
                <div>
                    <img src={info.snippet.thumbnails.medium.url} alt="video-thumbnail"/>
                    <p className='duration'>{formatVideoDuration(info.contentDetails.duration)}</p>
                </div>
                
                <div className='video-details'>
                    <p className='video-title'>{info.snippet.title}</p>
                    <p>{info.snippet.channelTitle}</p>
                    <p className='views-date'>{formatViewCount(info.statistics.formatViewCount)} <RxDotFilled/> {formatVideoDate(info.snippet.publishedAt)}</p>
                </div>

                <p className='video-actions'><HiOutlineDotsVertical/></p>
            </div>
        </Link>
    )
}