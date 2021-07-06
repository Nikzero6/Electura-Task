import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import "popper.js/dist/popper.min.js"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './css/App.css';
import './css/props.css';

//screens
import Navbar from "./screens/navbar";
import Sidebar from "./screens/sidebar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Sidebar/>

    </div>
  );
}

export default App;

