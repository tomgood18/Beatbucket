import React, { useContext, useState } from 'react';
import logo from "./logo2.png"
import plus from "./plus.png"
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { NavLink } from 'react-router-dom';
//import { Divider } from '@material-ui/core';
//import { NeuButton } from "neumorphism-react";
import './Dropdown.css'


const AuthNavigation = () => {
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    

    return (

        
        
        <div class="topnav" >
            <div className="">
                <NavLink to="/" className='home-button'> <a href="" className="logo"><img className="logo" src={logo} alt=""/></a></NavLink>
            </div>

            <h1><NavLink to="/">Beatbucket</NavLink></h1>


            <div class="topnav-signIn">
                <div class="dropdown">
                    <button class="dropbtn"> {displayName}
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                        <NavLink to="/profile">Profile</NavLink>


                        <a href="#">Buckets</a>
                        <a href="#">Projects</a>
                        {/* <Divider /> */}
                        <a href="#">Upgrade</a>
                        <a href="#">Settings</a>

                        
                        <NavLink onClick = {() => {auth.signOut()}} to="/default">Sign out</NavLink>
                   
                    </div>
                </div> 
            </div>

            <div class="topnav-signIn">
                <div class="dropdown">
                    <button class="dropbtn"> < img className="plus" src={plus} />
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">

                    {/* Finish other navlinks to upload files, etc. */}

                    <NavLink to="/newbucket">New Bucket</NavLink>
                    <a href="#">New Collaboration</a>
                    <NavLink to="/newproject">New Project</NavLink>
                    </div>
                </div> 
            </div>

            
       </div>
    );
}
 
export default AuthNavigation;