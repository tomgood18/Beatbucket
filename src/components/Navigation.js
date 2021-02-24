import React from 'react';
import logo from "./logo2.png"
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        
        <div class="topnav" >
            <div className="">
                <NavLink to="/default" className='home-button'> <a href="" className="logo"><img className="logo" src={logo} alt=""/></a></NavLink>
            </div>

            <h1><NavLink to="/default">Beatbucket</NavLink></h1>

            <div class="topnav-signUp">
                <NavLink to="/signup">Sign Up</NavLink>
            </div>

            <div class="topnav-signIn">
                <NavLink to="/signin">Sign In</NavLink>
            </div>
       </div>
    );
}
 
export default Navigation;