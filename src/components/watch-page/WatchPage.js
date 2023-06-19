import './WatchPage.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
        <div>
            
            <div>
                <div>
                    <div>
                        video and channel stuff
                    </div>
                    <div>
                        comments
                    </div>
                </div>

                <div>
                    related videos
                </div>
            </div>
        </div>
    )
}

export default WatchPage;