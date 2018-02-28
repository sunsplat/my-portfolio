import React, { Component } from "react";
import './about.css';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div>
          <h2>About Me</h2>
          <p>While working as Product Manager for Kingsoft in Beijing, China, I was entranced by the developers within my team for their ability to create beautiful, user-friendly applications. After sampling some online courses with Codecademy and Code School, I fell in love and decided to change my career path, actively pursuing web development full-time. With my ambition, perseverance, and dedication, I have become an expert in front-end development; experienced in Ruby and Ruby on Rails; and proficient with JavaScript, jQuery, PHP, MySQL and the LAMP stack in MVC frameworks.</p>
          <p>Fully immersing myself in the Atlanta tech community, I regularly attend Meetups to learn new technologies and connect with others with similar passions. I have been able to use what I have learned to help other self-taught developers succeed and regularly lead the Atlanta group of FreeCodeCampers, an online full-stack bootcamp.</p>

          <p>Bringing my ambition and passion for knowledge, my past professional work experience in team-oriented environments, and my adaptability gained from working abroad in international business settings, I am ready to contribute to an engineering team right away.</p>

          <ul>
            <li>LinkedIn: <a href="http://www.linkedin.com/in/msellensun">msellensun</a></li>
            <li>Github: <a href="http://www.github.com/sunsplat">sunsplat</a></li>
            <li>Twitter: <a href="http://www.twitter.com/ms_ellerz">@ms_ellerz</a></li>
          </ul>
        </div>
        <div>
          <h2>My Specialties</h2>

          <p>LAMP stack (Linux, Apache, MySQL, PHP), React, JavaScript, jQuery, Ruby, Ruby on Rails, Git, SVN, PostgreSQL, Vagrant, VirtualBox, HTML, CSS, Wordpress, Adobe Photoshop, Adobe Illustrator, Adobe Lightroom</p>

          <p>Mandarin Chinese (Professional-working level)</p>
          <p>English (Native)</p>
        </div>
      </div>
    );
  }
}