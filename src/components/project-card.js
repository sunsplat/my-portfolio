import React from 'react';
import './project-card.css';
// import imgWiki from '../assets/fcc_wiki.png';
// import imgGuessingGame from '../assets/guessing_game.png';

export default function ProjectCard(props) {
    const projects = props.projects.map((project, index) => 
        <li key={index}>
            <p>{project.name}</p>
            <img id={props.imgId}
                className={props.imgClassName}
                alt={props.imgAlt} src={project.image}/>
            <a href={project.app_link} target="_blank">Demo</a>
        </li>
    );

    return (
        <ul className={props.className}>
            {projects}
        </ul>
    );
}
