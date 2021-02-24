import './App.css';
import React, { useContext, Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Terms from './components/Terms';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Profile from "./components/Profile";
import UserProvider from "./providers/UserProvider";
import { UserContext } from "./providers/UserProvider";
import Application from './components/Application';

  function App() {

    return (    
      
      <UserProvider>
        <Application />
      </UserProvider>
      
    );
  }

 export default App;