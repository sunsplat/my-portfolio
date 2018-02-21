import React from 'react';
import './social-media-links.css';

export default function SocialMediaLinks(props) {
    const links = props.socialLinks.map((link, index) => 
        <li key={index}>
            <a href={link.link} target="_blank">{link.name}</a>
        </li>
    );

    return (
        <ul className="socialMediaLinks">
            {links}
        </ul>
    );
}
