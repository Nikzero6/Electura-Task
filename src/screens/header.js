import React from "react";
import logo from '../ui/logo.svg';
import {FaSearch, FaListUl, FaShoppingCart} from 'react-icons/fa';

function Header() {
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
           
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <FaListUl/> Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
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

          <a className="nav-link  mx-2 fs24 shoppingCart" href="#"><FaShoppingCart/></a>
          <a className="nav-link btn btn-sm btn-outline-dark" href="#">Login</a>
          <a className="nav-link btn btn-sm btn-danger mx-2" href="#">Signup</a>
          
        </div>
      </nav>

    </div>
  )
}

export default Header;