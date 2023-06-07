import { BiCog } from "react-icons/bi";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageError } from "react-icons/bi";

function Support() {
    return (
        <>
            <li title="Settings">
                <BiCog className="sidebar-icon"/>
                <p>Settings</p>
            </li>   
            <li title="Report history">
                <MdOutlineOutlinedFlag className="sidebar-icon"/>
                <p>Report history</p>
            </li>
            <li title="Help">
                <AiOutlineQuestionCircle className="sidebar-icon"/>
                <p>Help</p>
            </li>
            <li title="Send feedback">
                <BiMessageError className="sidebar-icon"/>
                <p>Send feedback</p>
            </li>
        </>
    )
}

export default Support;