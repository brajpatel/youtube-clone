import './AccountSettings.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { FaRegUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import ExtraSettings from '../../extra-settings/ExtraSettings';

function AccountSettings() {
    const { signOut } = useContext(AuthContext);

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
                <li onClick={signOut}>
                    <MdExitToApp className='icon'/>
                    <p>Sign out</p>
                </li>
                <ExtraSettings/>
            </ul>
        </div>
    )
}

export default AccountSettings;