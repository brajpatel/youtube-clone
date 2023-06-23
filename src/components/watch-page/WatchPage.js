import './WatchPage.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VideoPlayer from './video-player/VideoPlayer';
import VideoDetails from './video-details/VideoDetails';
import { getChannelIcon } from "../../api/getChannelIcon";
import { getChannelSubs } from "../../api/getChannelSubs";
import { getPopularVideos } from "../../api/getPopularVideos";
import OtherVideoCard from "../video-cards/other-video-card/OtherVideoCard";
import { getVideoComments } from "../../api/getVideoComments";
import { formatCommentNumber } from "../../utils/formatCommentNumber";
import { BsFilterLeft } from "react-icons/bs";
import Comment from "./comment/Comment";

function WatchPage() {
    const location = useLocation();
    const { state } = location;
    const [channelIcon, setChannelIcon] = useState('');
    const [channelSubs, setChannelSubs] = useState('');
    const [popularVideos, setPopularVideos] = useState([]);
    const [comments, setComments] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getChannelInfo();
        getVideos();
        getComments();
    }, [])

    const getChannelInfo = async () => {
        setChannelIcon(await getChannelIcon(state.snippet.channelId));
        setChannelSubs(await getChannelSubs(state.snippet.channelId));
    }

    const getVideos = async () => {
        let videos = await getPopularVideos();
        setPopularVideos(videos.slice(0, 10));
    }

    const getMoreVideos = async () => {
        if(popularVideos.length >= 30) return;

        try {
            const videos = await getPopularVideos();
            setPopularVideos((prev) => [...prev, ...videos.slice(0, 10)]);
        }
        catch(err) {
            console.log(err);
        }
    }

    const getComments = async () => {
        setComments(await getVideoComments(state.id));
    }

    return (
        <div className='watch-page'>
            <VideoPlayer state={state}/>

            <div className={`watch-page-bottom ${isOpen ? 'expand-row' : ''}`}>
                <div>
                    <VideoDetails
                    state={state}
                    channelIcon={channelIcon}
                    channelSubs={channelSubs}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    />
                </div>

                {/* I WOULD'VE IMPLEMENTED RELATED VIDEOS BUT YOUTUBE IS NO LONGER SUPPORTING THE 'relatedToVideoId' PARAMETER FROM 7TH AUGUST 2023 */}
                <div className='other-videos'>
                    {popularVideos.map((item, index) => {
                        return <OtherVideoCard key={index} info={item}/>
                    })}
                    <button
                    className={`show-more-videos ${popularVideos.length >= 30 ? 'hide' : ''}`}
                    onClick={getMoreVideos}>Show more</button>
                </div>

                <div className='comments-container'>
                    <div className='comment-count'>
                        <p>{formatCommentNumber(state.statistics.commentCount)}</p>
                        <p className='sort-by'><BsFilterLeft className='icon'/> Sort by</p>
                    </div>

                    <div className='add-comment'>
                        <div className='profile-pic'>
                            <p>B</p>
                        </div>
                        <input placeholder='Add a comment...' type='text'/>
                    </div>

                    <div className='comments'>
                        {comments.map((item, index) => {
                            return <Comment key={index} info={item}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchPage;