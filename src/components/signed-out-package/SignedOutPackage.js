import { useState } from "react";
import SignedOutHeader from "./SignedOutHeader";
import SignedOutSidebar from "./sidebar/SignedOutSidebar";
import SignedOutSidebarSmall from "./sidebar/SignedOutSidebarSmall";

function SignedOutPackage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        if(!isOpen) {
            document.body.style.overflowY = 'hidden';
        }
        else {
            document.body.style.overflowY = 'auto';
        }

        setIsOpen(!isOpen);
    }

    return (
        <>
            <SignedOutHeader/>
            <SignedOutSidebarSmall toggleSidebar={toggleSidebar}/>
            <SignedOutSidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </>
    )
}

export default SignedOutPackage;