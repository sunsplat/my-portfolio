import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/contact.css';

export default class Contact extends Component {
  render() {
    return (
      <Container className="contact">
        <h2>Contact</h2>
        <Row>
            <Col id="contact-info" sm={{ size: 4, offset: 4 }} md={{ size: 4, offset: 2 }}>
              <ul>
                <li>LinkedIn: <a href="http://www.linkedin.com/in/msellensun">msellensun</a></li>
                <li>Github: <a href="http://www.github.com/sunsplat">sunsplat</a></li>
                <li>Twitter: <a href="http://www.twitter.com/ms_ellerz">@ms_ellerz</a></li>
              </ul>
            </Col>
            <Col sm={{ size: 12 }} md={{ size: 4 }}>
                <Form action="https://formspree.io/missellensun@outlook.com" method="POST" id="contact-form">
                    <input type="text" id="gotcha" name="_gotcha" />
                    <input type="hidden" name="_subject" value="[MyPortfolio] New submission!" />
                    <FormGroup>
                        <Label htmlFor="name">Name:</Label>
                        <Input type="text" name="name" placeholder="Harry Potter" id="name" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email:</Label>
                        <Input type="email" name="_replyto" id="email" placeholder="hpotter@hogwarts.edu" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="message">Message:</Label>
                        <Input type="textarea" name="message" placeholder="I just wanted to say..." id="message"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="submit" value="Send"/>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
      </Container>
    );
  }
}
