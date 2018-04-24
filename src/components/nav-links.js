import React from 'react';
import './nav-links.css';
import { NavLink } from "react-router-dom";

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
        <li key={index}>
            <NavLink exact to={link.link}>{link.name}</NavLink>
        </li>
    );

    return (
        <ul className="navLinks">
            {links}
        </ul>
    );
}
