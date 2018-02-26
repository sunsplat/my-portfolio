import React, { Component } from 'react';
import logo from './assets/fcc_wiki.png';
import './Portfolio.css';
import ProjectCard from './components/project-card';
import SocialMediaLinks from './components/social-media-links';
import NavLinks from './components/nav-links';

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

    this.navLinks = [
      {
        "name": "Portfolio",
        "link": "#portfolio"
      },
      {
        "name": "About",
        "link": "#about"
      },
      {
        "name": "Contact",
        "link": "#link"
      },
      {
        "name": "Experience",
        "link": "#experience"
      }
    ];
  }
  render() {
    return (
      <div className="Portfolio">
        <header className="Portfolio-header">
          <h1 className="Portfolio-title">EllenSun</h1>
          <NavLinks navLinks={this.navLinks} />
          <SocialMediaLinks socialLinks={this.socialLinks}/>
        </header>
        <section className="Portfolio-projects">
          <a name="portfolio"></a>
          <ProjectCard className="Projects" projects={this.props.projects}/>
        </section>
      </div>
    );
  }
}

export default Portfolio;
