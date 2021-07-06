/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import AppContext from "./AppContext";
import logo from "./ui/logo.svg";
import {Route, NavLink, HashRouter} from "react-router-dom";
import "popper.js/dist/popper.min.js"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



import './css/App.css';
import './css/props.css';

//screens
import Navbar from "./screens/navbar";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import DiscoverPage from "./screens/discover";
import CoursesPage from "./screens/my-courses";
import AccountPage from "./screens/oauth";
import Profile from "./screens/profile";
import Settings from "./screens/settings";

//firebase auth
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

global.firebase = firebase;
global.fire = {
    ID: null
};
var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "electura-task.firebaseapp.com",
    projectId: "electura-ask",
    storageBucket: "electura-task.appspot.com",
    messagingSenderId: process.env.REACT_APP_MSG_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MSR_ID
  };
// Initialize Firebase
global.firebase.initializeApp(firebaseConfig);



export default function AppLoader(){

    const [isFireUser, setIsFireUser] = useState(false);

    const initFirebase = async (context) => {
        global.firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              console.log("You are signed in...")
              setIsFireUser(true);
          }else{
            console.log("You are guest...");
            setIsFireUser(false);
            setTimeout(()=>{
                context.setAppLoaded(true);
            }, 500);
          }
        });
    }

    const splash = (context) => {
        return (
            <div className="App flex">      
                <div className="splash abs abc">
                    <img src={logo} className="bl" alt="logo-img"/>
                </div>
            </div>
        )
    }

    const loadApp = async (context) => {
        await initFirebase(context);
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (
                        context.appLoaded() ? 
                        <div className="App">
                             <HashRouter>
                                <Navbar/>
                                <Sidebar/>
                                <div className="app-content">
                                <Route exact path="/" component={HomePage}/>
                                <Route path="/discover" component={DiscoverPage}/>
                                <Route path="/my-courses" component={CoursesPage}/>
                                <Route path="/oauth" component={AccountPage}/>
                                <Route path="/profile" component={Profile}/>
                                <Route path="/settings" component={Settings}/>
                                </div>
                            </HashRouter>
                            </div>
                        : 
                        <AppContext.Consumer>
                            {
                                context => {
                                    loadApp(context);
                                    return (splash(context))
                                }
                            }
                        </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )

}
