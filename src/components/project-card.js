import React from 'react';

// import './character-count.css';

export default function ProjectCard(props) {
    return (
        <div className={props.className}>
            <img id={props.imgId}
                className={props.imgClassName}
                alt={props.imgAlt} />

        </div>
    );
}
