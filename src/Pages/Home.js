import {Link} from "react-router-dom";

export default function SignIn() {
    return (
        <div>
            <h2>Home Component</h2>
            <h4><Link to="/sign-up">Sign Up</Link></h4>
            <h4><Link to="/sign-in">Sign In</Link></h4>
        </div>
    )
}