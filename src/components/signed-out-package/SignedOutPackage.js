import { useState } from "react";
import Header from "./Header";
import SignedOutSidebar from "./sidebar/SignedOutSidebar";
import SignedOutSidebarSmall from "./sidebar/SignedOutSidebarSmall";

function SignedOutPackage() {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <div>
            <Header/>
            {toggleSidebar ? <SignedOutSidebar/> : <SignedOutSidebarSmall/>}
        </div>
    )
}

export default SignedOutPackage;