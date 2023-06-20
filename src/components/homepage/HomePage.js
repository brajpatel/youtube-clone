import "./HomePage.css";
import { useEffect, useState } from "react";
import Preloader from "../preloader/Preloader";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPopularVideos } from "../../api/getPopularVideos";
import GeneralVideoCard from "../video-cards/general-video-card/GeneralVideoCard";

function HomePage(props) {
    const { setActiveTab } = props;
    const [loading, setLoading] = useState(true);
    const [homeVideos, setHomeVideos] = useState(video);

    useEffect(() => {
        setLoading(true);
        // setVideos();
    }, []);

    const setVideos = async () => {
        setHomeVideos(await getPopularVideos());
    }
    
    const getMoreVideos = async () => {
        return;
        
        if(homeVideos.length >= 60) return;

        try {
            const videos = await getPopularVideos();
            setHomeVideos((prev) => [...prev, ...videos]);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        homeVideos.length ? setLoading(false) : setLoading(true);
    }, [homeVideos])
    
    return loading ?
    (
        <Preloader/>
    ) : (
        <div className="homepage" id="scrollableDiv">
            <InfiniteScroll
            className="homepage-infinite-scroll"
            dataLength={homeVideos.length}
            next={getMoreVideos}
            hasMore={true}
            scrollableTarget="scrollableDiv"
            scrollThreshold={0.92}
            >
            {homeVideos.map((item, index) => {
                return (
                    <GeneralVideoCard key={index} info={item} setActiveTab={setActiveTab}/>
                )
            })}
            </InfiniteScroll>

            {homeVideos.length >= 60 ?
            (
            <div className="homepage-end-message">
                <p>Thanks for taking the time to check out my project!</p>
            </div>
            ) : null}
        </div>
    )
}

export default HomePage;

const video = [
    {
        "kind": "youtube#video",
        "etag": "FuPvGUyeiMCdov3upme_Kk6UtFI",
        "id": "F5tSoaJ93ac",
        "snippet": {
            "publishedAt": "2021-10-28T11:00:05Z",
            "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
            "title": "Imagine Dragons & JID - Enemy (from the series Arcane: League of Legends) | Official Music Video",
            "description": "Oh, the misery, everybody wants to be my ENEMY. Watch the official music video for Arcane’s title track, Enemy. Arcane is coming to Netflix on November 6 at 7:00 PM PT.\n\nPRODUCTION CREDITS\nEnemy by Imagine Dragons & JID\nWritten by: Dan Reynolds, Wayne Sermon, Ben McKee, Daniel Platzman, Robin Fredriksson, Mattias Larsson, Justin Tranter, Destin Route p/k/a J.I.D\nProduced by: Mattman & Robin (Wolf Cousins Productions)\nMixed by: Serban Ghenea (MixStar Studios)\nMastered by: Randy Merrill (Sterling Sound, NYC)\nSession Engineer: Ben Sedano (Conway Studios), John Hanes\n\nANIMATION: \nFortiche Prod\nCo-Directors: Arnaud Delord, Bart Maunoury\nProducers: Pascal Charrue, Jérôme Combe\nProduction Company: Fortiche, Riot Games\n\n\nLYRICS\nLook out for yourself!\n\nI wake up to the sounds of the silence that allows\nFor my mind to run around, with my ear up to the ground\nI’m searching to behold the stories that are told\nWhen my back is to the world, that was smiling when I turned\nTell you you’re the greatest\nBut once you turn they hate us\n\nOh, the misery!\nEverybody wants to be my enemy\nSpare the sympathy\nEverybody wants to be\nMy enemy... y... y... y...\nLook out for yourself!\nMy enemy... y... y... y...\nLook out for yourself!\nBut I’m ready\n\nYour words up on the wall, as you’re praying for my fall\nAnd the laughter in the halls, and the names that I’ve been called\nI stack it in my mind, and I’m waiting for the time\nWhen I show you what it’s like, to be words spit in a mic!\nTell you you’re the greatest\nBut once you turn they hate us\n\nOh, the misery!\nEverybody wants to be my enemy\nSpare the sympathy\nEverybody wants to be \nMy enemy... y... y... y...\nLook out for yourself!\nMy enemy... y... y... y...\nLook out for yourself!\n\nLook, okay\nI’m hoping that somebody pray for me\nI’m praying that somebody hope for me\nI’m staying where nobody ‘posed to be\nP-p-posted\nBeing a wreck of emotions\nReady to go whenever just let me know\nThe road is long so put the pedal into the floor\nThe enemy’s on my trail, my energy unavailable\nImma tell ‘em hasta luego\n\nThey wanna plot on my trot to the top, \nI’ve been outta shape, thinkin’ out the box\nI’m an astronaut, I blasted off the planet rock\nTo cause Catastrophe and it matters more because I had it not\nHad I thought about wreaking havoc on an opposition\nKinda shockin’ they wanted static with precision\nI’m automatic quarterback, I ain’t talkin’ sacking\nPack it, pack it up, Iont panic, batter batter up\nWho the baddest, it don’t matter, cause we at ya throat\n\nEverybody wants to be my enemy\nSpare the sympathy\nEverybody wants to be\nMy enemy\nOh, the misery!\nEverybody wants to be my enemy\nSpare the sympathy\nEverybody wants to be \nMy enemy\n\nThey say pray it away, I swear, I’ll never be a Saint, no way\nMy enemy\nThey say pray it away, I swear, I’ll never be a Saint\n\nLook out for yourself!\n\nFrom the Arcane: League of Legends Original Soundtrack\nNovember 6 // November 13 // November 20\nThe #Arcane soundtrack drops in three releases. \nPre-save now. https://lnk.to/ArcaneLeagueofLegends\n\nP/C 2020 Darkroom/Interscope Records under exclusive license to Riot Games, Inc.                                                                                              \nImagine Dragons appears Courtesy of KIDinaKORNER/Interscope Records.                                                                                                                                                     JID appears courtesy of Dreamville/Interscope Records",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/F5tSoaJ93ac/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/F5tSoaJ93ac/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/F5tSoaJ93ac/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/F5tSoaJ93ac/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/F5tSoaJ93ac/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "League of Legends",
            "tags": [
                "Arcane",
                "league of legends",
                "arcane show",
                "riot games arcane",
                "riot games show",
                "league of legends show",
                "imagine dragons",
                "JID",
                "music video",
                "arcane netflix",
                "netflix arcane",
                "caitlyn",
                "cait",
                "vi",
                "jayce",
                "viktor",
                "wildrift",
                "riot forge",
                "team fight tactics",
                "lolesports",
                "silco",
                "mel",
                "vander",
                "piltover",
                "zaun",
                "video games",
                "gaming",
                "fantasy",
                "drama",
                "animation",
                "anime",
                "fortiche",
                "worlds",
                "worlds 2021",
                "animated series",
                "runeterra"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
                "title": "Imagine Dragons & JID - Enemy (from the series Arcane: League of Legends) | Official Music Video",
                "description": "Oh, the misery, everybody wants to be my ENEMY. Watch the official music video for Arcane’s title track, Enemy. Arcane is coming to Netflix on November 6 at 7:00 PM PT.\n\nPRODUCTION CREDITS\nEnemy by Imagine Dragons & JID\nWritten by: Dan Reynolds, Wayne Sermon, Ben McKee, Daniel Platzman, Robin Fredriksson, Mattias Larsson, Justin Tranter, Destin Route p/k/a J.I.D\nProduced by: Mattman & Robin (Wolf Cousins Productions)\nMixed by: Serban Ghenea (MixStar Studios)\nMastered by: Randy Merrill (Sterling Sound, NYC)\nSession Engineer: Ben Sedano (Conway Studios), John Hanes\n\nANIMATION: \nFortiche Prod\nCo-Directors: Arnaud Delord, Bart Maunoury\nProducers: Pascal Charrue, Jérôme Combe\nProduction Company: Fortiche, Riot Games\n\n\nLYRICS\nLook out for yourself!\n\nI wake up to the sounds of the silence that allows\nFor my mind to run around, with my ear up to the ground\nI’m searching to behold the stories that are told\nWhen my back is to the world, that was smiling when I turned\nTell you you’re the greatest\nBut once you turn they hate us\n\nOh, the misery!\nEverybody wants to be my enemy\nSpare the sympathy\nEverybody wants to be\nMy enemy... y... y... y...\nLook out for yourself!\nMy enemy... y... y... y...\nLook out for yourself!\nBut I’m ready\n\nYour words up on the wall, as you’re praying for my fall\nAnd the laughter in the halls, and the names that I’ve been called\nI stack it in my mind, and I’m waiting for the time\nWhen I show you what it’s like, to be words spit in a mic!\nTell you you’re the greatest\nBut once you turn they hate us\n\nOh, the misery!\nEverybody wants to be my enemy\nSpare the sympathy\nEverybody wants to be \nMy enemy... y... y... y...\nLook out for yourself!\nMy enemy... y... y... y...\nLook out for yourself!\n\nLook, okay\nI’m hoping that somebody pray for me\nI’m praying that somebody hope for me\nI’m staying where nobody ‘posed to be\nP-p-posted\nBeing a wreck of emotions\nReady to go whenever just let me know\nThe road is long so put the pedal into the floor\nThe enemy’s on my trail, my energy unavailable\nImma tell ‘em hasta luego\n\nThey wanna plot on my trot to the top, \nI’ve been outta shape, thinkin’ out the box\nI’m an astronaut, I blasted off the planet rock\nTo cause Catastrophe and it matters more because I had it not\nHad I thought about wreaking havoc on an opposition\nKinda shockin’ they wanted static with precision\nI’m automatic quarterback, I ain’t talkin’ sacking\nPack it, pack it up, Iont panic, batter batter up\nWho the baddest, it don’t matter, cause we at ya throat\n\nEverybody wants to be my enemy\nSpare the sympathy\nEverybody wants to be\nMy enemy\nOh, the misery!\nEverybody wants to be my enemy\nSpare the sympathy\nEverybody wants to be \nMy enemy\n\nThey say pray it away, I swear, I’ll never be a Saint, no way\nMy enemy\nThey say pray it away, I swear, I’ll never be a Saint\n\nLook out for yourself!\n\nFrom the Arcane: League of Legends Original Soundtrack\nNovember 6 // November 13 // November 20\nThe #Arcane soundtrack drops in three releases. \nPre-save now. https://lnk.to/ArcaneLeagueofLegends\n\nP/C 2020 Darkroom/Interscope Records under exclusive license to Riot Games, Inc.                                                                                              \nImagine Dragons appears Courtesy of KIDinaKORNER/Interscope Records.                                                                                                                                                     JID appears courtesy of Dreamville/Interscope Records"
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT3M34S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "230873455",
            "likeCount": "3183199",
            "favoriteCount": "0",
            "commentCount": "36865"
        }
    }
]