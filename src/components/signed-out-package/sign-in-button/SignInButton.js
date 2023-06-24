import "./SignInButton.css";
import { FaRegUserCircle } from "react-icons/fa";

function SignInButton() {
    const { signIn } = useContext(AuthContext);

    return (
        <button className="sign-in-button" onClick={signIn}><FaRegUserCircle/>Sign in</button>
    )
}

export default SignInButton;