
import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import { NavLink } from 'react-router-dom';

const NewProject = () => {
   const user = useContext(UserContext);
   const {photoURL, displayName, email} = user;

   const [projectName, setProjectName] = useState('');
   const [projectDescription, setProjectDescription] = useState('');
   const [error, setError] = useState(null);

   const uploadProject = (event,projectName) => {

      console.log(projectName)
      event.preventDefault();

   };


   
   const onChangeHandler = (event) => {
      const {name, value} = event.currentTarget;
   
      if (name === 'projectName') {
        setProjectName(value);
      } else if (name === 'projectDescription') {
        setProjectDescription(value.name);
      } 
};


  return (
    <div class="padding">
         <center>

            <h1>Create New Project</h1>

            {error !== null && <div style={{color: "red"}}>{error}</div>}

            <label for="projectName"><b>Coordinate, track, and update your music in one place, so projects stay transparent and on schedule.</b></label>

            <input type="text" id="projectName" value={projectName} onChange={event => onChangeHandler(event)} placeholder="Enter Project Name" name="projectName" required/>

            <label for="projectDescription"><b>Project Description (Optional)</b></label>

            <input type="text" id="projectDescription"  value={projectDescription} onChange={event => onChangeHandler(event)} placeholder="Enter Project Description" name="projectDescription" />


            <div style={{textAlign:"center"}} class="dropdown">
                <button class="dropbtn"> Select Bucket (Optional)
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">

                    <a >Bucket 1</a>
                    <a >Bucket 2</a>
                    <a >Bucket 3</a>
                    <a >Bucket 4</a>

                </div>
            </div> 


            <p>
               <label>
                  <input checked='checked' type="checkbox" name="remember" style={{marginbottom:'15px'}}/> 
                  Public
               </label>
            </p>

            <p>
               <label>
                  <input type="checkbox"  name="remember" style={{marginbottom:'15px'}}/> 
                  Private
               </label>
            </p>

            <div class="clearfix">
               <NavLink to="/">
                  <button type="submit" onClick = {(event) => {uploadProject(event, projectName)}} class="submitButton">Finish</button>
               </NavLink>
            </div>
      
         </center>
      </div>
  ) 
};

export default NewProject;