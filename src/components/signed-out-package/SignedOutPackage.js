import { useState } from "react";
import Header from "./Header";
import SignedOutSidebar from "./sidebar/SignedOutSidebar";
import SignedOutSidebarSmall from "./sidebar/SignedOutSidebarSmall";
import HomePage from "../HomePage";

function SignedOutPackage() {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <>
            <Header/>
            <SignedOutSidebarSmall/>
        </>
    )
}

export default SignedOutPackage;