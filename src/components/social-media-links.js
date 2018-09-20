import React from 'react';
import '../css/social-media-links.css';

export default function SocialMediaLinks(props) {
    const socialLinks = [
        {
            "name": "github",
            "link": "http://github.com/sunsplat"
        },
        {
            "name": "linkedin",
            "link": "http://linkedin.com/in/msellensun"
        },
        {
            "name": "twitter",
            "link": "http://twitter.com/ms_ellerz"
        }
      ];

    const links = socialLinks.map((link, index) =>
        <li key={index}>
            <a href={link.link} target="_blank"><i className={"fab fa-2x fa-" + link.name}></i></a>
        </li>
    );

    return (
        <ul className="socialMediaLinks">
            {links}
        </ul>
    );
}
