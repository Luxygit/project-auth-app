import {Link } from "react-router-dom";

export default function SignIn() {
    return (
        <div>
            <h2>Sign In</h2>
            <h4><Link to="/">Home</Link></h4>
            <input name="email" type="text" />
        </div>
    )
}