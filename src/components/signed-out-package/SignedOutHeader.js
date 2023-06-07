import "./SignedOutHeader.css";
import { useState } from "react";
import youtubeLogo from "../../assets/youtube-logo.png";
import SearchBar from "../SearchBar";
import { HiOutlineDotsVertical } from "react-icons/hi";
import SignInButton from "./SignInButton";

function SignedOutHeader() {
    return (
        <header className="signed-out-header">
            <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
            <SearchBar/>
            <div className="header-end">
                <HiOutlineDotsVertical className="header-icon"/>
                <SignInButton/>
            </div>
        </header>
    )
}

export default SignedOutHeader;