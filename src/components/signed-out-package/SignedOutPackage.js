import { useState } from "react";
import SignedOutHeader from "./header/SignedOutHeader";
import SignedOutSidebar from "./sidebar/SignedOutSidebar";
import SignedOutSidebarSmall from "./sidebar/SignedOutSidebarSmall";

function SignedOutPackage(props) {
    const { activeTab, setActiveTab } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SignedOutHeader setActiveTab={setActiveTab}/>

            <SignedOutSidebarSmall
            toggleSidebar={toggleSidebar}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />

            <SignedOutSidebar
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            />
        </>
    )
}

export default SignedOutPackage;