import { useState } from "react";
import SignedInHeader from "./SignedInHeader";
import SignedInSidebarSmall from "./sidebar/SignedInSidebarSmall";
import SignedInSidebar from "./sidebar/SignedInSidebar";

function SignedInPackage() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SignedInHeader/>
            <SignedInSidebar isOpen={isOpen}/>
        </>
    )
}

export default SignedInPackage;