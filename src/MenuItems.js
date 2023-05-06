/*import React from "react";
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
}*/
export const MenuItems = [
    {
      Title: "Home",
      url: "#",
      cName: "nav-links"
    },
    {
      Title: "About Us",
      url: "#",
      cName: "nav-links"
    },
    {
      Title: "Our Services",
      url: "#",
      cName: "nav-links"
    },
    {
      Title: "Contact Us",
      url: "#",
      cName: "nav-links"
    },
    {
      Title: "Sign Up",
      url: "#",
      cName: "nav-links-mobile"
    }
  ];
  import React from "react";

import { MenuItems } from "./MenuItems";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo">React</h1>
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.Title}
              </a>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
}