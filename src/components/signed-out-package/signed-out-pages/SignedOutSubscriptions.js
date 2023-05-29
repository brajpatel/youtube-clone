import { BsCollectionPlay } from "react-icons/bs";
import SignInButton from "../SignInButton";

function SignedOutSubscriptions() {
    return (
        <div className="signed-out-page">
            <BsCollectionPlay className="signed-out-page-icon"/>
            <p>Don't miss new videos!</p>
            <p>Sign in to see updates from your favourite YouTube channels</p>
            <SignInButton/>
        </div>

    )
}

export default SignedOutSubscriptions;