import React, { Component } from 'react';
import logo from './assets/fcc_wiki.png';
import './Portfolio.css';
import ProjectCard from './components/project-card';
import PortfolioHeader from './components/header';

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
    this.filteredArray = this.props.projects.filter(function(project) {

    });
    return (
      <div className="Portfolio">
        <PortfolioHeader className="Portfolio-header" h1ClassName="Portfolio-title" title="Ellen Sun" socialLinks={this.socialLinks}/>
        <ProjectCard className="Projects" projects={this.props.projects}/>
      </div>
    );
  }
}

export default Portfolio;
