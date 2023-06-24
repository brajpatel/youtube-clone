import "./SignInButton.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";

function SignInButton() {
    const { signInUser } = useContext(AuthContext);

    return (
        <button className="sign-in-button" onClick={signInUser}><FaRegUserCircle/>Sign in</button>
    )
}

export default SignInButton;