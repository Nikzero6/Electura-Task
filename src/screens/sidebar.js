import React from "react";
import logo from '../ui/logo.svg';

function Sidebar() {
    return (
        <div className="sidebar fixed">
            <a href="#"className="logo bl">
                <img src={logo} className="bl" alt="logo"></img>
            </a>
            
        </div>
    )
}

export default Sidebar;