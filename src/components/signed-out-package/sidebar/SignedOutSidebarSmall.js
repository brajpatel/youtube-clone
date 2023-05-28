import { Link } from "react-router-dom";

function SignedOutSidebarSmall() {
    return (
        <nav>
            <div>Hamburger</div>
            <ul>
                <Link to="/">
                    <li className="page-link">
                        <p>Svg here</p>
                        <p>Home</p>
                    </li>
                </Link>
                <Link to="/">
                    <li className="page-link">
                        <p>Svg here</p>
                        <p>Shorts</p>
                    </li>
                </Link>
                <Link to="/">
                    <li className="page-link">
                        <p>Svg here</p>
                        <p>Subscriptions</p>
                    </li>
                </Link>
                <Link to="/">
                    <li className="page-link">
                        <p>Svg here</p>
                        <p>Library</p>
                    </li>
                </Link>
                <Link to="/">
                    <li className="page-link">
                        <p>Svg here</p>
                        <p>History</p>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default SignedOutSidebarSmall;