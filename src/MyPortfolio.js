import React, { Component } from 'react';
import './css/MyPortfolio.css';
import SocialMediaLinks from './components/social-media-links';
import NavLinks from './components/nav-links';

import { Route, HashRouter } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

class MyPortfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div className="Portfolio">
          <header className="header">
            <h1 className="Portfolio-title">EllenSun</h1>
            <NavLinks />
          </header>
          <section className="content">
            <Route exact path="/" component={Portfolio}/>
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/contact" component={Contact}/>
          </section>
          <footer>
            <SocialMediaLinks />
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default MyPortfolio;
