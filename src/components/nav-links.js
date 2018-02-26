import React from 'react';
import './nav-links.css';

export default function NavLinks(props) {
    const links = props.navLinks.map((link, index) => 
        <li key={index}>
            <a href={link.link}>{link.name}</a>
        </li>
    );

    return (
        <ul className="navLinks">
            {links}
        </ul>
    );
}
