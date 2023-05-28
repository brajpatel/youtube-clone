import { useState } from "react";
import Header from "./Header";
import SignedOutSidebar from "./sidebar/SignedOutSidebar";
import SignedOutSidebarSmall from "./sidebar/SignedOutSidebarSmall";
import HomePage from "../HomePage";

function SignedOutPackage() {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const toggleSidebar = () => {
        setSidebarToggle(!sidebarToggle);
    }

    return (
        <>
            <Header/>
            <SignedOutSidebarSmall toggleSidebar={toggleSidebar}/>
            <SignedOutSidebar sidebarToggle={sidebarToggle} toggleSidebar={toggleSidebar}/>
        </>
    )
}

export default SignedOutPackage;