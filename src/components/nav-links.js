import React from 'react';
import './nav-links.css';
import { NavLink } from "react-router-dom";

export default function NavLinks(props) {
    const navLinks = [
        {
          "name": "Portfolio",
          "link": "/portfolio"
        },
        {
          "name": "About",
          "link": "/about"
        },
        {
          "name": "Contact",
          "link": "/contact"
        },
        {
          "name": "Experience",
          "link": "/experience"
        }
      ];

    const links = navLinks.map((link, index) => 
        <li key={index}>
            <NavLink onClick={props.onClick} to={link.link}>{link.name}</NavLink>
        </li>
    );

    return (
        <ul className="navLinks">
            {links}
        </ul>
    );
}
