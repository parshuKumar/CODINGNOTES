import {LOGO_URL} from "../utils/constants";
import {useState} from "react";

const Header = () => {
    // let btnName = "Login"; //we are trying with HTML
    
    //useState variable
    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src = {LOGO_URL} />
         </div>
        
        <div className = "nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
                {/* <button className = "login" 
                onClick={()=>{btnName = "Logout"}}>{btnName}</button> */}
                <button className = "login" 
                onClick={()=>{
                    btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                }}>{btnNameReact}</button> 
            </ul>
        </div>
        </div>
    )
}
export default Header;
