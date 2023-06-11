import './AccountSettings.css';
import { FaRegUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi";
import { LuLanguages } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";
import { FaRegKeyboard } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMessageError } from "react-icons/bi";

function AccountSettings() {
    return (
        <div className='account-settings'>
            <div className='account-profile'>
                <div className='profile-pic'>
                    <p>B</p>
                </div>
                <div className='profile-details'>
                    <p>Brajesh Patel</p>
                    <a href="#">Manage your Google Account</a>
                </div>
            </div>
            <ul>
                <li>
                    <FaRegUserCircle/>
                    <p>Your channel</p>
                </li>
                <li>
                    <MdExitToApp/>
                    <p>Sign out</p>
                </li>
                <li>
                    <HiOutlineMoon/>
                    <p>Appearance: Light</p>
                </li>
                <li>
                    <LuLanguages/>
                    <p>Language: British English</p>
                </li>
                <li>
                    <GrLanguage/>
                    <p>Location: Earth</p>
                </li>
                <li>
                    <FaRegKeyboard/>
                    <p>Keyboard shortcuts</p>
                </li>
                <li>
                    <BiCog/>
                    <p>Settings</p>
                </li>
                <li>
                    <AiOutlineQuestionCircle/>
                    <p>Help</p>
                </li>
                <li>
                    <BiMessageError/>
                    <p>Send feedback</p>
                </li>
            </ul>
        </div>
    )
}

export default AccountSettings;