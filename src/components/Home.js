import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
 
const home = () => {
    return (

        <div>
            {/* <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/> */}
            <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

            <div class="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
            <div class="overlay"></div>

            <div class="carousel-inner">
                <div class="item slides active">
                    <div class="slide-1"></div>
                        <div class="hero">
                            <hgroup>
                                <h1>Built for artists</h1>        
                                <h3>Beatbucket is more than just your beat file management. 
                                    Beatbucket gives artists one place to plan collabs, share, and deploy music.</h3>
                            </hgroup>
                            <NavLink to="/signup">
                                <button class="btn btn-hero btn-lg">Get Started!</button>
                            </NavLink>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
 
export default home;