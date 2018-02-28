import React, { Component } from 'react';
import './MyPortfolio.css';
import SocialMediaLinks from './components/social-media-links';
import NavLinks from './components/nav-links';

import { Route, NavLink, HashRouter } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

class MyPortfolio extends Component {
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
      <HashRouter>
        <div className="Portfolio">
          <header className="header">
            <h1 className="Portfolio-title">EllenSun</h1>
            <NavLinks />
            <SocialMediaLinks socialLinks={this.socialLinks}/>
          </header>
          <section className="content">
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </section>
        </div>
      </HashRouter>
    );
  }
}

export default MyPortfolio;
