import "./SignedOutPage.css";
import { MdOutlineVideoLibrary } from "react-icons/md";
import SignInButton from "../SignInButton";

function SignedOutLibrary() {
    return (
        <div className="signed-out-page">
            <MdOutlineVideoLibrary className="signed-out-page-icon"/>
            <p>Enjoy your favourite videos</p>
            <p>Sign in to access videos that you've liked and saved</p>
            <SignInButton/>
        </div>

    )
}

export default SignedOutLibrary;