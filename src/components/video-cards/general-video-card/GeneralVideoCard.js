import './GeneralVideoCard.css';
import { formatVideoDuration } from '../../../utils/formatVideoDuration';
import { getChannelIcon } from "../../../api/getChannelIcon";
import { formatViewCount } from '../../../utils/formatViewCount';
import { formatVideoDate } from '../../../utils/formatVideoDate';
import { RxDotFilled } from "react-icons/rx";

function GeneralVideoCard(props) {
    const { info } = props;

    let videoDuration = formatVideoDuration(info.contentDetails.duration);
    let channelIcon = getChannelIcon(info.snippet.channelId);
    let videoViews = formatViewCount(Number(info.statistics.viewCount));
    let videoDate = formatVideoDate(info.snippet.publishedAt);

    return (
        <div className="general-video-card">
            <div className="thumbnail">
                <img src={info.snippet.thumbnails.medium.url}/>
                <p className='duration'>{videoDuration}</p>
            </div>
            <div className='bottom'>
                <div className='channel-icon'>
                    <img src="https://yt3.ggpht.com/d1Y-nXfndysBVcaFq30rUFkRmwIk5-aFh3cJ8bDbzmJXr-e3k0f_NUqFwIB-9_3PqTYMTHVFXA=s88-c-k-c0x00ffffff-no-rj" alt="channel-icon"/>
                </div>

                <div className='info'>
                    <p className='video-title'>{info.snippet.title}</p>
                    <p className='channel-name'>{info.snippet.channelTitle}</p>
                    <p className='views-date'>{videoViews} views <RxDotFilled/> 4 days ago</p>
                </div>
            </div>
        </div>
    )
}

export default GeneralVideoCard;