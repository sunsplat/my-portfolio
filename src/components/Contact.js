import React, { Component } from "react";
import './contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h2>Contact</h2>
        <div id="contact-info">
          <h2>Ellen Sun</h2>
          <ul>
            <li>LinkedIn: <a href="http://www.linkedin.com/in/msellensun">msellensun</a></li>
            <li>Github: <a href="http://www.github.com/sunsplat">sunsplat</a></li>
            <li>Twitter: <a href="http://www.twitter.com/ms_ellerz">@ms_ellerz</a></li>
          </ul>
        </div>
        <form action="https://formspree.io/missellensun@outlook.com" method="POST" id="contact-form">
          <input type="text" id="gotcha" name="_gotcha" />
          <input type="hidden" name="_subject" value="[MyPortfolio] New submission!" />
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Harry Potter" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="_replyto" id="email" />
          <label htmlFor="message">Message:</label>
          <input type="textarea" name="message" placeholder="I just wanted to say..." id="message"/>
          <input type="submit" value="Send"/>
        </form>
      </div>
    );
  }
}
