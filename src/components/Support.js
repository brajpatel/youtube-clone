import { BiCog } from "react-icons/bi";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageError } from "react-icons/bi";

function Support() {
    return (
        <>
            <li>
                <BiCog className="sidebar-icon"/>
                <p>Settings</p>
            </li>   
            <li>
                <MdOutlineOutlinedFlag className="sidebar-icon"/>
                <p>Report history</p>
            </li>
            <li>
                <AiOutlineQuestionCircle className="sidebar-icon"/>
                <p>Help</p>
            </li>
            <li>
                <BiMessageError className="sidebar-icon"/>
                <p>Send feedback</p>
            </li>
        </>
    )
}

export default Support;