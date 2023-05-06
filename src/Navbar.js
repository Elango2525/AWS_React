/*import React, { Component } from "react";

export class Navbar extends Component{
  render(){
    return{
      
    }
  }
}*/
import React from "react";
import { MenuItems } from "./MenuItems";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo">React</h1>
      <div className="menu-icon"></div>
      <ul>
        <li><a href="https://jionetportal.jio.in:8443/status"></a></li>
      </ul>
    </Nav>
  );
}