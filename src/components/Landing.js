
import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
const Landing = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  console.log(user);
  

  return (
    <center>
        <h1>Welcome {displayName}</h1>
    </center>
  ) 
};

export default Landing;