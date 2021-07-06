/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from '../ui/logo.svg';
import {FaSearch, FaShoppingCart} from 'react-icons/fa';
import {BiChevronDownCircle, BiChevronRight} from 'react-icons/bi';

import {NavLink} from "react-router-dom";

function Navbar() {
  return ( 
    <div className = "header">

      {/* navbar */}

        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand logo" href="/">
          <img src={logo} alt="brandLogo"></img>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse " id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto container-fluid">
           
          <li class="dropdown"><a href="#"><span>Categories</span><BiChevronDownCircle/></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span><BiChevronRight/></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>

            <li className="nav-item col-8">
                <form className="d-flex">
                  <div className="input-group">
                    <input className="form-control form-control-lg col-8 border-0 searchBar" type="search" placeholder="Search for Courses" aria-label="Search"></input>
                    <button className="btn btn-light searchBtn" type="submit"><FaSearch/></button>
                 </div>
                </form>
            </li>

          </ul>

          <a className="nav-link  mx-2 s24" href="#"><FaShoppingCart/></a>
          <a className="nav-link btn btn-sm btn-outline-dark" href="#">Login</a>
          <NavLink className="nav-link btn btn-sm btn-danger mx-2" to={"oauth"}>Signup</NavLink>
          
        </div>
      </nav>

    </div>
  )
}

export default Navbar;