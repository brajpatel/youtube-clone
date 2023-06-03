import "./SignedOutHeader.css";
import { useState } from "react";
import youtubeLogo from "../../assets/youtube-logo.png";
import SearchBar from "../SearchBar";
import SignInButton from "./SignInButton";

function SignedOutHeader() {
    return (
        <header className="signed-out-header">
            <img className="youtube-logo" src={youtubeLogo} alt="youtube-logo"/>
            <SearchBar/>
            <SignInButton/>
        </header>
    )
}

export default SignedOutHeader;