import React from 'react';
import '../css/nav-links.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import { NavLink } from "react-router-dom";

export default function NavLinks(props) {
    const navLinks = [
        {
          "name": "Portfolio",
          "link": "/"
        },
        {
          "name": "About",
          "link": "/about"
        },
        {
          "name": "Resume",
          "link": "/resume"
        },
        {
          "name": "Contact",
          "link": "/contact"
        }
      ];

    const links = navLinks.map((link, index) =>
        <NavItem key={index}>
            <NavLink exact to={link.link}>{link.name}</NavLink>
        </NavItem>
    );

    return (
        <Nav expand="md" className="navLinks">
            {links}
        </Nav>
    );
}
