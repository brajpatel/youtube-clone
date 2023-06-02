import { useState } from "react";
import SignedInSidebarSmall from "./sidebar/SignedInSidebarSmall";

function SignedInPackage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sig/>
            <SignedOutSidebarSmall toggleSidebar={toggleSidebar}/>
            <SignedOutSidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </>
    )
}

export default SignedInPackage;