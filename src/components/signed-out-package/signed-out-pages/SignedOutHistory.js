import "./SignedOutPage.css";
import { GrHistory } from "react-icons/gr";
import SignInButton from "../SignInButton";

function SignedOutHistory() {
    return (
        <div className="signed-out-history">
            <div className="signed-out-page">
                <GrHistory className="signed-out-page-icon"/>
                <p>Keep track of what you watch</p>
                <p>Watch history isn't viewable when you're signed out.
                    <a href="https://support.google.com/youtube/answer/95725?hl=en-GB" target="_blank">
                        Learn more
                    </a>
                </p>
                <SignInButton/>
            </div>
            <div className="history-type">
                <p>History type</p>
                <div>
                    <label htmlFor="watch-history">Watch history</label>
                    <input id="watch-history" name="history-type" type="radio" defaultChecked/>
                </div>
                <div>
                    <label htmlFor="community">Community</label>
                    <input id="community" name="history-type" type="radio"/>
                </div>
            </div>
        </div>

    )
}

export default SignedOutHistory;