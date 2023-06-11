import './AccountSettings.css';
import { FaRegUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import GeneralSettings from '../../general-settings/GeneralSettings';

function AccountSettings() {
    return (
        <div className='account-settings'>
            <div className='account-profile'>
                <div className='profile-pic'>
                    <p>B</p>
                </div>
                <div className='account-details'>
                    <p>Brajesh Patel</p>
                    <button>Manage your Google Account</button>
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
                <GeneralSettings/>
            </ul>
        </div>
    )
}

export default AccountSettings;