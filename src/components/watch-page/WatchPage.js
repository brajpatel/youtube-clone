import './WatchPage.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VideoPlayer from './video-player/VideoPlayer';
import VideoDetails from './video-details/VideoDetails';
import { getChannelIcon } from "../../api/getChannelIcon";
import { getChannelSubs } from "../../api/getChannelSubs";
import { formatViewCount } from "../../utils/formatViewCount";

function WatchPage() {
    const location = useLocation();
    const { state } = location;
    const [channelIcon, setChannelIcon] = useState('');
    const [channelSubs, setChannelSubs] = useState('');

    useEffect(() => {
        getChannelInfo();
    }, [])

    const getChannelInfo = async () => {
        setChannelIcon(await getChannelIcon(state.snippet.channelId));
        setChannelSubs(await getChannelSubs(state.snippet.channelId));
    }

    return (
        <div className='watch-page'>
            <VideoPlayer state={state}/>

            <div className='watch-page-bottom'>
                <div>
                    <VideoDetails state={state} channelIcon={channelIcon} channelSubs={channelSubs}/>
                </div>

                <div>
                    related videos
                </div>

                <div>
                    comments
                </div>
            </div>
        </div>
    )
}

export default WatchPage;