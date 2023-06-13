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
                    <p className='video-title'>This Game made my PC blow up...</p>
                    <p className='channel-name'>Vienna</p>
                    <p className='views-date'>350k views <RxDotFilled/> 4 days ago</p>
                </div>
            </div>
        </div>
    )
}

export default GeneralVideoCard;

let i = [
    {
        "kind": "youtube#video",
        "etag": "-sXJ31tNknsccsRa2sN8pywoDzU",
        "id": "c7K2TA0bBpY",
        "snippet": {
            "publishedAt": "2023-06-12T18:08:56Z",
            "channelId": "UC0KU8F9jJqSLS11LRXvFWmg",
            "title": "Star Wars Outlaws: Official Gameplay Walkthrough | Ubisoft Forward",
            "description": "Watch the official gameplay walkthrough of Star Wars Outlaws. Experience the first ever open world Star Wars game and risk it all as Kay Vess, a scoundrel seeking freedom and the means to start a new life. Coming 2024.\n\nAbout Star Wars Outlaws:\nExperience the first-ever open world Star Wars™ game, set between the events ofThe Empire Strikes Back and Return of the Jedi. Explore distinct planets across the galaxy, both iconic and new. Risk it all as Kay Vess, an emerging scoundrel seeking freedom and the means to start a new life, along with her companion Nix. Fight, steal, and outwit your way through the galaxy’s crime syndicates as you join the galaxy’s most wanted.\n\nLearn more at: https://starwarsoutlaws.com/\n\nINSTAGRAM: https://www.instagram.com/starwarsoutlaws/\nFACEBOOK: https://www.facebook.com/starwarsoutlaws\nTWITTER: https://twitter.com/starwarsoutlaws\nDISCORD: https://discord.gg/starwarsoutlaws\n\n#Ubisoft #StarWarsOutlaws\n\nAbout Ubisoft:\nUbisoft is a creator of worlds, committed to enriching players’ lives with original and memorable entertainment experiences. Ubisoft’s global teams create and develop a deep and diverse portfolio of games, featuring brands such as Assassin’s Creed®, Brawlhalla®, For Honor®, Far Cry®, Tom Clancy’s Ghost Recon®, Just Dance®, Rabbids®, Tom Clancy’s Rainbow Six®, The Crew®, Tom Clancy’s The Division®, and Watch Dogs®. Through Ubisoft Connect, players can enjoy an ecosystem of services to enhance their gaming experience, get rewards and connect with friends across platforms. With Ubisoft+, the subscription service, they can access a growing catalog of more than 100 Ubisoft games and DLC. For the 2021–22 fiscal year, Ubisoft generated net bookings of €2,129 million. To learn more, please visit: www.ubisoftgroup.com.\n\n© 2023 Ubisoft Entertainment. All Rights Reserved. Ubisoft and the Ubisoft logo are registered trademarks in the US and/or other countries.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/c7K2TA0bBpY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/c7K2TA0bBpY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/c7K2TA0bBpY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/c7K2TA0bBpY/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/c7K2TA0bBpY/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Ubisoft",
            "tags": [
                "Ubisoft",
                "StarWarsOutlaws",
                "StarWars"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
                "title": "Star Wars Outlaws: Official Gameplay Walkthrough | Ubisoft Forward",
                "description": "Watch the official gameplay walkthrough of Star Wars Outlaws. Experience the first ever open world Star Wars game and risk it all as Kay Vess, a scoundrel seeking freedom and the means to start a new life. Coming 2024.\n\nAbout Star Wars Outlaws:\nExperience the first-ever open world Star Wars™ game, set between the events ofThe Empire Strikes Back and Return of the Jedi. Explore distinct planets across the galaxy, both iconic and new. Risk it all as Kay Vess, an emerging scoundrel seeking freedom and the means to start a new life, along with her companion Nix. Fight, steal, and outwit your way through the galaxy’s crime syndicates as you join the galaxy’s most wanted.\n\nLearn more at: https://starwarsoutlaws.com/\n\nINSTAGRAM: https://www.instagram.com/starwarsoutlaws/\nFACEBOOK: https://www.facebook.com/starwarsoutlaws\nTWITTER: https://twitter.com/starwarsoutlaws\nDISCORD: https://discord.gg/starwarsoutlaws\n\n#Ubisoft #StarWarsOutlaws\n\nAbout Ubisoft:\nUbisoft is a creator of worlds, committed to enriching players’ lives with original and memorable entertainment experiences. Ubisoft’s global teams create and develop a deep and diverse portfolio of games, featuring brands such as Assassin’s Creed®, Brawlhalla®, For Honor®, Far Cry®, Tom Clancy’s Ghost Recon®, Just Dance®, Rabbids®, Tom Clancy’s Rainbow Six®, The Crew®, Tom Clancy’s The Division®, and Watch Dogs®. Through Ubisoft Connect, players can enjoy an ecosystem of services to enhance their gaming experience, get rewards and connect with friends across platforms. With Ubisoft+, the subscription service, they can access a growing catalog of more than 100 Ubisoft games and DLC. For the 2021–22 fiscal year, Ubisoft generated net bookings of €2,129 million. To learn more, please visit: www.ubisoftgroup.com.\n\n© 2023 Ubisoft Entertainment. All Rights Reserved. Ubisoft and the Ubisoft logo are registered trademarks in the US and/or other countries."
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT10M39S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "2017460",
            "likeCount": "76883",
            "favoriteCount": "0",
            "commentCount": "11389"
        }
    }
]