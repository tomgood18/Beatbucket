import React, { useContext, Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
 
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Terms from './Terms';
import Error from './Error';
import Navigation from './Navigation';
import AuthNavigation from './AuthNavigation'
import Profile from "./Profile";
import Landing from "./Landing";
import NewBucket from "./NewBucket";
import NewProject from "./NewProject";
import { UserContext } from "../providers/UserProvider";



function Application() {

    const user = useContext(UserContext);

    return (    
        
      user ?
      <BrowserRouter>
        <div>
          <AuthNavigation />
          <Redirect to="/" />
            <Switch>
              <Route path="/" component={Landing} exact/>
              <Route path="/default" component={Landing} exact/>
              <Route path="/profile" component={Profile} exact/>
              <Route path="/newbucket" component={NewBucket} exact />
              <Route path="/newproject" component={NewProject} exact />
            </Switch>
        </div>
      </BrowserRouter>
      :

       <BrowserRouter>
        <div>
        
          <Navigation />
            <Switch>
             <Route path="/default" component={Home} exact/>
             <Route path="/signin" component={SignIn} exact/>
             <Route path="/signup" component={SignUp} exact/>
             <Route path="/terms" component={Terms} exact/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
export default Application; 