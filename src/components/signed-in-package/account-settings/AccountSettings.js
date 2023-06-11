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
                <div className='account-details'>
                    <p>Brajesh Patel</p>
                    <a href="#">Manage your Google Account</a>
                </div>
            </div>
            <ul>
                <li className='your-channel'>
                    <FaRegUserCircle className='icon'/>
                    <p>Your channel</p>
                </li>
                <li>
                    <MdExitToApp className='icon'/>
                    <p>Sign out</p>
                </li>
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
            </ul>
        </div>
    )
}

export default AccountSettings;