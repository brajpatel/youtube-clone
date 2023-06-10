import { useState } from "react";
import SignedInHeader from "./header/SignedInHeader";
import SignedInSidebarSmall from "./sidebar/SignedInSidebarSmall";
import SignedInSidebar from "./sidebar/SignedInSidebar";

function SignedInPackage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SignedInHeader/>

            <SignedInSidebarSmall
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            />

            <SignedInSidebar
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            />
        </>
    )
}

export default SignedInPackage;