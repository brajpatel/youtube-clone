import { Link } from "react-router-dom";

function SignedOutSidebarSmall() {
    return (
        <nav>
            <div>Hamburger</div>
            <ul>
                <li>
                    <i class="fa-solid fa-house"></i>
                    <p>Home</p>
                </li>
            </ul>
        </nav>
    )
}

export default SignedOutSidebarSmall;