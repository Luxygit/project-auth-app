import {Link } from "react-router-dom";
import {useState, useEffect} from "react"



export default function SignUp() {
     const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
   

    function OnSignUp (){
         const body = {
        email: email,
        password: password
    }
        const url = "http://localthost:4000/user/sign-up"
        fetch( url, {
            method: "POST",
            body: JSON.stringify(body)
            .then ((res) => res.json())
            .then ((data) => {
                console.log(data);
            })
        })
        }
    return (
        <div >
            <h2>Sign Up</h2>
            <h4><Link to="/">Home</Link></h4>
            <div>
                  <input 
                  name="email" 
                  type="text" 
                  placeholder="email"
                  value ={email}
                  onChange = {(event) => setEmail(event.target.value)} /> 
            </div>
            <div>
                 <input 
                  name="password" 
                  type="password" 
                  placeholder="password"
                  value ={password}
                  onChange = {(event) => setPassword(event.target.value)} /> 
            </div>
             <button
             onClick = { OnSignUp}
             >Sign Up</button>
        </div>
    )
}