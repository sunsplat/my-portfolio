import React from 'react';
import './header.css';

export default function PortfolioHeader(props) {
    const links = props.socialLinks.map((link, index) => 
        <li key={index}>
            <a href={link.link} target="_blank">{link.name}</a>
        </li>
    );

    return (
        <header className={props.className}>
          <h1 className={props.h1ClassName}>{props.title}</h1>
          <ul className="socialMediaLinks">
            {links}
          </ul>
        </header>
    );
}
