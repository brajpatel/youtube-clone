import { useState } from "react";
import SignedInSidebarSmall from "./sidebar/SignedInSidebarSmall";

function SignedInPackage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SignedInSidebarSmall/>
        </>
    )
}

export default SignedInPackage;