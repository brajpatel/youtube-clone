import { useState } from "react";
import SignedInHeader from "./SignedInHeader";
import SignedInSidebarSmall from "./sidebar/SignedInSidebarSmall";

function SignedInPackage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SignedInHeader/>
            <SignedInSidebarSmall/>
        </>
    )
}

export default SignedInPackage;