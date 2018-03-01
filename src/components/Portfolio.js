import React, { Component } from "react";
import ProjectCard from './project-card';
import projects from '../projects.json';
import './Portfolio.css';

export default class Project extends Component {
  render() {
    return (
      <div>
        <ProjectCard className="Projects" projects={projects}/>
      </div>
    );
  }
}
