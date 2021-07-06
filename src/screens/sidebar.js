/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import {FaUserCircle, FaHome, FaCompass, FaBookReader, FaLanguage} from 'react-icons/fa';
import {IoSettings} from 'react-icons/io5';
import {MdAccountBox} from 'react-icons/md'
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi';

function Sidebar() {

    class SideNav {
        constructor(label, slug, icon) {
            this.label = label;
            this.slug = slug;
            this.icon = icon;
        }
    }

      var sideNav1 = new SideNav("", "/", <FaHome/>);
      var sideNav2 = new SideNav("", "discover", <FaCompass/>);
      var sideNav3 = new SideNav("", "my-courses", <FaBookReader/>);
      var sideNav4 = new SideNav("", "my-account", <MdAccountBox/>);
      var sideNav5 = new SideNav("", "settings", <IoSettings/>);
      var sideNav6 = new SideNav("", "language", <FaLanguage/>);
      
    const [nav, setNav] = useState([
        sideNav1, sideNav2, sideNav3, sideNav4, sideNav5, sideNav6
    ])

    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i=0; i < nav.length; i++){
        navigation.push(
        <li key={"nav" + i + "-" + nav[i].slug}>
            <a href={nav[i].slug} className={"link noul flex c333" + (currentPage === nav[i].slug ? " on" : "")}>
                <div className={"ico s20"}>{nav[i].icon}</div>
                <h2 className="lbl s15">{nav[i].label}</h2>
            </a>
        </li>
        );
    }
    
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);

        let newSidenav1 = new SideNav("Home", "/", <FaHome/>);
        let newsideNav2 = new SideNav("Discover", "discover", <FaCompass/>);
        let newsideNav3 = new SideNav("My Courses", "my-courses", <FaBookReader/>);
        let newsideNav4 = new SideNav("My Account", "my-account", <MdAccountBox/>);
        let newsideNav5 = new SideNav("Settings", "settings", <IoSettings/>);
        let newsideNav6 = new SideNav("Language", "language", <FaLanguage/>);

        if(isActive){
            setNav([newSidenav1, newsideNav2, newsideNav3, newsideNav4, newsideNav5, newsideNav6]);
        }else{
            setNav([sideNav1, sideNav2, sideNav3, sideNav4, sideNav5, sideNav6]);
        }
        console.log(isActive);
        console.log(sideNav1.label);
        console.log(newSidenav1.label);
    }

    return (
        <div className={`sidebar fixed ${isActive ? "" : "expand"}`}>
            <a href="profile"className={`user bl ${isActive ? "s15" : "s20"}`}>
                <FaUserCircle/> Username
            </a>
            <hr className="sidebar-hr"></hr>
            <ul className="nav">
                {navigation}
            </ul>
            <button className="btn btn-dark bg-transparent sidebarToggler s24" onClick={handleToggle}>{isActive ? <BiChevronRight/> : <BiChevronLeft/>}</button>
        </div>
    )
}

export default Sidebar;