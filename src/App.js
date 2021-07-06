import React from "react";
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

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Sidebar/>
        <div className="app-content">
          <Route exact path="/" component={HomePage}/>
          <Route path="/discover" component={DiscoverPage}/>
          <Route path="/my-courses" component={CoursesPage}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

