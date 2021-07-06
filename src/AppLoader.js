import React, { useState, useEffect } from 'react';
import AppContext from "./AppContext";
import logo from "./ui/logo.svg";
import {Route, NavLink, HashRouter} from "react-router-dom";
import "popper.js/dist/popper.min.js"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './css/App.css';
import './css/props.css';

import "./css/props.css";
import "./css/App.css";

//screens
import Navbar from "./screens/navbar";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import DiscoverPage from "./screens/discover";
import CoursesPage from "./screens/my-courses";

import AccountPage from "./screens/oauth";

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
    apiKey: "AIzaSyDuSa4vBgYPB3vcv3hM9NBz26-YQ1Yqifw",
    authDomain: "electura-task.firebaseapp.com",
    projectId: "electura-task",
    storageBucket: "electura-task.appspot.com",
    messagingSenderId: "598675388568",
    appId: "1:598675388568:web:79d372eae6649eccf238ed",
    measurementId: "G-LZJDF0DQF9"
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
                    <img src={logo} className="bl" />
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
          <Route path="/my-courses" component={AccountPage}/>
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
