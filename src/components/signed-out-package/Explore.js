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
            <li>
                <HiOutlineFire className="sidebar-icon"/>
                <p>Trending</p>
            </li>
            <li>
                <TfiMusicAlt className="sidebar-icon"/>
                <p>Music</p>
            </li>
            <li>
                <MdOutlineMovie className="sidebar-icon"/>
                <p>Movies & TV</p>
            </li>
            <li>
                <GiAerialSignal className="sidebar-icon"/>
                <p>Live</p>
            </li>
            <li>
                <SiYoutubegaming className="sidebar-icon"/>
                <p>Gaming</p>
            </li>
            <li>
                <BsNewspaper className="sidebar-icon"/>
                <p>News</p>
            </li>
            <li>
                <BsTrophy className="sidebar-icon"/>
                <p>Sport</p>
            </li>
            <li>
                <AiOutlineBulb className="sidebar-icon"/>
                <p>Learning</p>
            </li>
            <li>
                <TbHanger2 className="sidebar-icon"/>
                <p>Fashion & beauty</p>
            </li>
        </>
    )
}

export default Explore;