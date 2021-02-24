import React, { useContext, useState } from 'react';
import './SignUp.css';
import firebase from "firebase/app";
import "firebase/auth";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";


const SignUp = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [displayName, setDisplayName] = useState("");
   const [error, setError] = useState(null);

   const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
      event.preventDefault();
      try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        generateUserDocument(user, {displayName});
      }
      catch(error){
        setError('Error Signing up with email and password');
      }
        
      setEmail("");
      setPassword("");
      setDisplayName("");
    };

   const onChangeHandler = event => {
      const { name, value } = event.currentTarget;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      } else if (name === "fullName") {
        setDisplayName(value);
      }
    };

   return (
      

      <div class="padding">
         <center>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>

            <label for="fullName"><b>Full Name</b></label>
            <input type="text" id="displayName" value={displayName} onChange={event => onChangeHandler(event)} placeholder="Enter Full Name" name="fullName" required/>

            <label for="email"><b>Email</b></label>
            <input type="text" id="userEmail" value={email} onChange={event => onChangeHandler(event)} placeholder="Enter Email" name="email" required/>

            <label for="password"><b>Password</b></label>
            <input type="password" id="userPassword" value={password} onChange={event => onChangeHandler(event)} placeholder="Enter Password" name="password" required/>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

            <label>
               <input type="checkbox" name="remember" style={{marginbottom:'15px'}}/> 
               Remember me
            </label>

            <p>By creating an account you agree to our <a href="/terms" style={{color: "#0000EE"}}>Terms & Privacy</a>.</p>

            <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" onClick={event => {createUserWithEmailAndPasswordHandler(event, email, password);}} 
            class="signupbtn">Sign Up</button>
            </div>
         </center>
      </div>


   );
}
 
export default SignUp;