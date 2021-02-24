import React, {useState} from 'react';
import './SignIn.css';
import { auth } from "../firebase";
import { NavLink } from 'react-router-dom';

 
const SignIn = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState(null);

   const signInWithEmailAndPasswordHandler = (event,email, password) => {
      console.log('Signing in')
       event.preventDefault();
       auth.signInWithEmailAndPassword(email, password).catch(error => {
         setError("Error signing in with password and email!");
         console.error("Error signing in with password and email", error);
         
       });
       
     };
     
     const onChangeHandler = (event) => {
         const {name, value} = event.currentTarget;
       
         if(name === 'email') {
            setEmail(value);
         }
         else if(name === 'password'){
            setPassword(value);
         }
     };

    return (

      <div class="padding">
         <center>

            <h1>Log In</h1>
            <p>Welcome Back!</p>

            {error !== null && <div style={{color: "red"}}>{error}</div>}

            <label for="email"><b>Email</b></label>
            <input type="text" id="userEmail" value={email} onChange={event => onChangeHandler(event)} placeholder="Enter Email" name="email"/>

            <label for="password"><b>Password</b></label>
            <input type="password" id="userPassword" value={password} onChange={event => onChangeHandler(event)} placeholder="Enter Password" name="password"/>
            
            <label>
               <input type="checkbox"  name="remember" style={{marginbottom:'15px'}}/> 
               Remember me
            </label>

            <div class="clearfix">
               <NavLink to="/">
                  <button type="submit" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}} class="signinbtn">Sign In</button>
               </NavLink>
            </div>
      
         </center>
      </div>
    );
}
 
export default SignIn;