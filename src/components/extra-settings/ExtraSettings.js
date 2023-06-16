import { HiOutlineMoon } from "react-icons/hi";
import { LuLanguages } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";
import { FaRegKeyboard } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageError } from "react-icons/bi";
import { BiHappyBeaming } from "react-icons/bi";

function ExtraSettings() {
    return (
        <>
            <li className='appearance'>
                <HiOutlineMoon className='icon'/>
                <p>Appearance: Light</p>
            </li>
            <li>
                <LuLanguages className='icon'/>
                <p>Language: British English</p>
            </li>
            <li>
                <GrLanguage className='icon'/>
                <p>Location: Earth</p>
            </li>
            <li>
                <FaRegKeyboard className='icon'/>
                <p>Keyboard shortcuts</p>
            </li>
            <li className='settings'>
                <BiCog className='icon'/>
                <p>Settings</p>
            </li>
            <li>
                <AiOutlineQuestionCircle className='icon'/>
                <p>Help</p>
            </li>
            <li>
                <BiMessageError className='icon'/>
                <p>Send feedback</p>
            </li>
            <li>
                <BiHappyBeaming className="icon"/>
                <p>Thanks for coming!</p>
            </li>
        </>
    )
}

export default ExtraSettings;