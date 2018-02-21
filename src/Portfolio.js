import React, { Component } from 'react';
import logo from './assets/fcc_wiki.png';
import './Portfolio.css';
import ProjectCard from './components/project-card';
import SocialMediaLinks from './components/social-media-links';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.socialLinks = [
      {
        "name": "Github",
        "link": "http://github.com/sunsplat"
      },
      {
        "name": "LinkedIn",
        "link": "http://linkedin.com/in/msellensun"
      }
    ];
  }
  render() {
    return (
      <div className="Portfolio">
        <header className="Portfolio-header">
          <h1 className="Portfolio-title">Ellen Sun</h1>
          <SocialMediaLinks socialLinks={this.socialLinks}/>
        </header>
        <ProjectCard className="Projects" projects={this.props.projects}/>
      </div>
    );
  }
}

export default Portfolio;
