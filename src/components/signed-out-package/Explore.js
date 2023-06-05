import { HiOutlineFire } from "react-icons/hi";
import { TfiMusicAlt } from "react-icons/tfi";
import { MdOutlineMovie } from "react-icons/md";

function Explore() {
    return (
        <ul>
            <p>Explore</p>
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
                <HiOutlineFire className="sidebar-icon"/>
                <p>Live</p>
            </li>
            <li>
                <HiOutlineFire className="sidebar-icon"/>
                <p>Gaming</p>
            </li>
            <li>
                <HiOutlineFire className="sidebar-icon"/>
                <p>News</p>
            </li>
            <li>
                <HiOutlineFire className="sidebar-icon"/>
                <p>Sport</p>
            </li>
            <li>
                <HiOutlineFire className="sidebar-icon"/>
                <p>Learning</p>
            </li>
            <li>
                <HiOutlineFire className="sidebar-icon"/>
                <p>Fashion & beauty</p>
            </li>
        </ul>
    )
}

export default Explore;