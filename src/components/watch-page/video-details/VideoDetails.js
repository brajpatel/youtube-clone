import './VideoDetails.css';
import { useState } from 'react';
import { formatSubscriberCount } from '../../../utils/formatSubscriberCount';
import { formatLikeCount } from '../../../utils/formatLikeCount';
import { formatViewCount } from '../../../utils/formatViewCount';
import { formatVideoDate } from '../../../utils/formatVideoDate';
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

function VideoDetails(props) {
    const { state, channelIcon, channelSubs } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='video-details'>
            <p className='video-title'>{state.snippet.title}</p>

            <div className='channel-video-details'>
                <div className='channel-details'>
                    <img src={channelIcon} alt="channel icon"/>

                    <div>
                        <p className='channel-name'>{state.snippet.channelTitle}</p>
                        <p className='channel-subs'>{formatSubscriberCount(channelSubs)}</p>
                    </div>

                    <div>
                        <div className='subscribe-button'>Subscribe</div>
                    </div>
                </div>

                <div className='user-actions'>
                    <div className='likes-dislikes'>
                        <p className='likes'><FiThumbsUp/> {formatLikeCount(state.statistics.likeCount)}</p>
                        <p className='dislikes'><FiThumbsDown/></p>
                    </div>

                    <div className='share'>
                        <p><RiShareForwardLine className='icon'/> Share</p>
                    </div>

                    <div className='more-actions'>
                        <BsThreeDots/>
                    </div>
                </div>
            </div>

            <div
            className={`description-box ${isOpen ? 'open' : ''}`}
            onClick={isOpen ? null : () => setIsOpen(!isOpen)}
            >
                <div>
                    <p>{formatViewCount(state.statistics.viewCount)}</p>
                    <p>{formatVideoDate(state.snippet.publishedAt)}</p>
                </div>

                <p className='description'>{state.snippet.description}</p>
                <button
                className='read-more-button'
                onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? 'Show less' : 'Show more'}
                </button>
            </div>
        </div>
    )
}


export default VideoDetails;