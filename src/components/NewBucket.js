
import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import {auth, generateBucket} from "../firebase";
import { NavLink } from 'react-router-dom';
import { FilePicker } from 'react-file-picker';

const NewBucket = () => {
   const user = useContext(UserContext);
   const {photoURL, displayName, email} = user;

   const [fileName, setFileName] = useState('');

   var bucketFile;

   const [bucketName, setBucketName] = useState('');
   const [bucketDescription, setBucketDescription] = useState('');
   const [error, setError] = useState(null);

   // Can't upload to cloud firestore (throws unsupported field value: a custom file object)
   // Need to upload .als file to firebase storage and create link to store in cloud firestore.
   // Also need to be able to retrieve using this link

   const uploadBucket = (event, bucketName) => {

      console.log(bucketName)
      event.preventDefault();

      generateBucket(user, bucketFile)
     
   };

   const setName = (file) => {
      const fName = file.name;

      bucketFile = file;

      console.log(file)
      setFileName(fName);
   }

   
   const onChangeHandler = (event) => {
      const {name, value} = event.currentTarget;
   
      if (name === 'bucketName') {
         setBucketName(value);
      } else if (name === 'bucketDescription') {
         setBucketDescription(value.name);
      } 
};


  return (
    <div class="padding">
         <center>

            <h1>New Bucket</h1>

            {error !== null && <div style={{color: "red"}}>{error}</div>}

            <label for="bucketName"><b>Bucket Name</b></label>

            <input type="text" id="bucketName" value={bucketName} onChange={event => onChangeHandler(event)} placeholder="Enter Bucket Name" name="bucketName" required/>

            <label for="bucketDescription"><b>Bucket Description (Optional)</b></label>

            <input type="text" id="bucketDescription" value={bucketDescription} onChange={event => onChangeHandler(event)} placeholder="Enter Bucket Description" name="bucketDescription"/>

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

            <FilePicker
               // extensions={['.adg' , '.adp' , '.adv' , '.agr' , '.alc' , '.alp' , '.als' , '.ams' , '.amxd' , 'asd' , 'ask']}
               // extensions={['.als']}
               onChange={FileObject => {setName(FileObject)}}
               onError={errMsg => console.log(errMsg)}
            >
               <button >
                 Upload file
               </button>
            </FilePicker>

            <label><b>{fileName}</b></label>

            <div class="clearfix">
               <NavLink to="/">
                  <button type="submit" onClick = {(event) => {uploadBucket(event, bucketFile)}} class="submitButton">Finish</button>
               </NavLink>
            </div>
      
         </center>
      </div>
  ) 
};

export default NewBucket;