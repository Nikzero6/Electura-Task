import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';
import './css/props.css';

//screens
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";

function App() {
  return (
    <div className="App flex">
        <Sidebar/>
        <Header/>

    </div>
  );
}

export default App;

