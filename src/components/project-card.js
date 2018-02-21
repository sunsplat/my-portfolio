import React from 'react';
import './project-card.css';

export default function ProjectCard(props) {
    const projects = props.projects.map((project, index) => 
        <li key={index}>
            <p>{project.name}</p>
            <img id={props.imgId}
                className={props.imgClassName}
                alt={props.imgAlt} 
                src={"../assets/" + project.image || "http://via.placeholder.com/350x350"} />
            <a href={project.app_link} target="_blank">Demo</a>
        </li>
    );

    return (
        <ul className={props.className}>
            {projects}
        </ul>
    );
}
