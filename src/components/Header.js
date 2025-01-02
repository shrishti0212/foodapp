import {LOGO_URL} from "../utils/constants.js";
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";



import { BrowserRouter } from "react-router-dom";

const Header= () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
   
    const isOnline =useOnlineStatus();

    //subscribing to store using selector
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    return(
        <div className="flex justify-between ">
            <div className="w-24">
                <img className="logo" src={LOGO_URL} /> 
            </div>
            <div class Name="flex items center"> 
            <ul className="flex p-4 m-4">
                <li className="px-5">
                Online Status: {isOnline ? "✅" : "🔴"}
                </li>
                  
                <li className="px-5">
                    <Link to="/">Home</Link>
                </li>

                <li className="px-5">
                    <Link to="/about">About Us</Link>
                </li>
                
                <li className="px-5">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-5">
                    <Link to="/Grocery">Grocery</Link>
                </li>
                
                <li className="px-5">
                    <Link to="/cart">Cart</Link>
                </li>

                <button 
                className="px-5" 
                    onClick= {() => {
                    btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact(" Login");
                }}
                >
                {btnNameReact}
                </button>
            </ul>
        </div>
        </div>
    );
};


export default Header;