import React, { Component } from 'react';
import './css/MyPortfolio.css';
import SocialMediaLinks from './components/social-media-links';
import NavLinks from './components/nav-links';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Route, HashRouter } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

class MyPortfolio extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
  }

  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }

  render() {
    return (
      <HashRouter>
        <div className="Portfolio">
          <header className="header">
            <Navbar expand="md">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavLinks />
                    </Nav>
                </Collapse>
                <NavbarBrand href="/" id="navbar-brand">EllenSun</NavbarBrand>
            </Navbar>

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
