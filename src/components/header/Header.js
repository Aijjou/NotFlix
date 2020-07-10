import { Component } from "react";
import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import  notflix  from "./notflix_logo.png"

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
      return (
          <header id="header" className="container-fluid">
            <div className="row md-2">
                  <img id="logo" className="col-md-1" src={notflix}/>
                <div className="row-md-8 offset-md-8">
                    <input id="search" type="text" class="form-control" className="col-m-7" placeholder="Rechercher votre série"></input>
                  
                    <a id="icon" href="" className="col-md-1" ><i class="fa fa-search" aria-hidden="true"></i></a>
                    <a id="icon" href="" className="col-md-1" ><i class="fa fa-bell-o" aria-hidden="true"></i></a>
                    <a id="icon" href="" className="col-md-1" ><i class="fa fa-user-circle" aria-hidden="true"></i></a>
                </div>
            </div>
            
              <nav className="navbar navbar-expand-lg navbar-light">
                  <ul className="navbar-nav mr-auto">
                    <li  className="nav-item">
                          <Link to='/' id="li" className="nav-link">Accueil</Link>
                      </li>
                       <li  className="nav-item">
                          <Link to='/Serie' id="li" className="nav-link">Séries</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/Film' id="li" className="nav-link">Films</Link>
                      </li>
                      <li  className="nav-item">
                          <Link to='/News' id="li" className="nav-link">Nouveautées</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/MyList' id="li" className="nav-link">Ma Liste</Link>
                      </li>
                  </ul>
              </nav>
          </header>
      )
  }
}
  

