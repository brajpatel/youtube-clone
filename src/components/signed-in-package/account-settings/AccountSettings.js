import './AccountSettings.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { FaRegUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import ExtraSettings from '../../extra-settings/ExtraSettings';

function AccountSettings() {
    const { signOutUser, user } = useContext(AuthContext);

    return (
        <div className='account-settings'>
            <div className='account-profile'>
                <img className='profile-pic' src={user.photo}/>
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
                <li onClick={signOutUser}>
                    <MdExitToApp className='icon'/>
                    <p>Sign out</p>
                </li>
                <ExtraSettings/>
            </ul>
        </div>
    )
}

export default AccountSettings;