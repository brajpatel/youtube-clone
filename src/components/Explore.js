import { HiOutlineFire } from "react-icons/hi";
import { TfiMusicAlt } from "react-icons/tfi";
import { MdOutlineMovie } from "react-icons/md";
import { GiAerialSignal } from "react-icons/gi";
import { SiYoutubegaming } from "react-icons/si";
import { BsNewspaper } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
import { AiOutlineBulb } from "react-icons/ai";
import { TbHanger2 } from "react-icons/tb";

function Explore() {
    return (
        <>
            <p className="explore">Explore</p>
            <li title="Trending">
                <HiOutlineFire className="sidebar-icon"/>
                <p>Trending</p>
            </li>

            <li title="Music">
                <TfiMusicAlt className="sidebar-icon"/>
                <p>Music</p>
            </li>
            
            <li title="Movies & TV">
                <MdOutlineMovie className="sidebar-icon"/>
                <p>Movies & TV</p>
            </li>

            <li title="Live">
                <GiAerialSignal className="sidebar-icon"/>
                <p>Live</p>
            </li>

            <li title="Gaming">
                <SiYoutubegaming className="sidebar-icon"/>
                <p>Gaming</p>
            </li>

            <li title="News">
                <BsNewspaper className="sidebar-icon"/>
                <p>News</p>
            </li>

            <li title="Sport">
                <BsTrophy className="sidebar-icon"/>
                <p>Sport</p>
            </li>

            <li title="Learning">
                <AiOutlineBulb className="sidebar-icon"/>
                <p>Learning</p>
            </li>

            <li title="Fashion & beauty">
                <TbHanger2 className="sidebar-icon"/>
                <p>Fashion & beauty</p>
            </li>
        </>
    )
}

export default Explore;