import { useState } from "react";
import Header from "./Header";
import SignedOutSidebar from "./sidebar/SignedOutSidebar";
import SignedOutSidebarSmall from "./sidebar/SignedOutSidebarSmall";

function SignedOutPackage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Header/>
            <SignedOutSidebarSmall toggleSidebar={toggleSidebar}/>
            <SignedOutSidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </>
    )
}

export default SignedOutPackage;