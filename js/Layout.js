import React from "react";
import { Link } from "react-router";
import { Nav, NavItem, Navbar, MenuItem, NavDropdown} from 'react-bootstrap';

require('jquery');

var subject;
var name;
var phone;
var emailBody;
var send;

export default class Layout extends React.Component {
  constructor() {
    super();

  }

  handleSubmit(event) {
    event.preventDefault();
    var data = this.state;

    $.ajax({

      type: "GET",
      crossDomain: true,
      url: "http://smileawhile.netai.net/mail.php",
      data: {
        email: $('#email').val(),
        subject: $('#name').val(),
        phone: $('#phone').val(),
        message: $('#message').val()
      },

      success: function(data){
        alert("Email Sent!");
      },
      error: function(data) {
        console.log("error");
      }
    });

  }

  render() {
    return (
      <div>
      <header id="anchor" class="navbar navbar-dark" role="banner">
        <div class="container">

              <div class="navbar-header">
              <Navbar inverse fixedTop>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#/">Corey Dunn</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem eventKey={1} href="#anchor">ABOUT</NavItem>
                    <NavItem eventKey={2} href="#Portfolio">PORTFOLIO</NavItem>
                    <NavItem eventKey={3} href="#ContactMe">CONTACT ME</NavItem>
                    <NavDropdown eventKey={4} title="React Projects" id="react-nav-dropdown">
                      <MenuItem eventKey={4.1} href="http://smileawhile.github.io/recipe/">Recipe Book</MenuItem>
                      <MenuItem eventKey={4.2} href="https://smileawhile.github.io/campers/">Top Free Code Camper</MenuItem>
                      <MenuItem eventKey={4.3} href="http://smileawhile.github.io/markdown/">Markdown Previewer</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={5} title="D3js Projects" id="d3-nav-dropdown">
                      <MenuItem eventKey={5.1} href="http://smileawhile.github.io/d3js/">Gross Domestic Product Bar Chart</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={6} title="Backend Projects" id="other-nav-dropdown">
                      <MenuItem eventKey={6.1} href="https://tsmic.herokuapp.com">Timestamp Microservice</MenuItem>
                      <MenuItem eventKey={6.2} href="https://shorterer.herokuapp.com">URL Shortener</MenuItem>
                      <MenuItem eventKey={6.3} href="https://parsehead.herokuapp.com">UA Header Parser</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={7} title="Other Projects" id="other-nav-dropdown">
                      <MenuItem eventKey={7.1} href="https://smileawhile.github.io/weatherApp.html">Local Weather App</MenuItem>
                      <MenuItem eventKey={7.2} href="http://smileawhile.github.io/pom.html">Pomodoro Clock</MenuItem>
                      <MenuItem eventKey={7.3} href="http://smileawhile.github.io/calc.html">Simple Calculator</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={7.4} href="tribute.html">Tribute Page</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={8} title="More About Me" id="more-nav-dropdown">
                      <MenuItem eventKey={8.1} href="https://github.com/SmileAwhile">View my Github</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={8.2} href="http://smileawhile.github.io/resume">My Resume</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={8.3} href="mailto:cjdunn11@gmail.com">Contact Me</MenuItem>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
      </header>

        <div >
          <div class="top">
            <div class="container-fluid">
              <div class="row">
              <div class="col-xs-2"></div>
                <h1 class="col-xs-8" id="AboutMe">My name is Corey Dunn and I'm one
                semester away from my A.S. in Computer Science.<br/><br/> I'd really love
                to do just about anything involving programming for a
                    career. <br/><br/>I'm very interested in Web Developement and I've been doing
                    a lot of research and learning in my free time to get better at it.
                    <br/><br/><a href="http://smileawhile.github.io/resume">Link to my Resume</a></h1>
                    <img class="col-xs-2 smallerImg" src=
                "https://avatars1.githubusercontent.com/u/19420817?v=3&s=460"/>
              </div>
              </div>
          </div>

          <div id="preview" >
            {this.props.children}
          </div>

          <div class="bot">

             <h1 class="centered" id="ContactMe">CONTACT ME</h1>

          <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <form>
                        <input class="input" id="name" placeholder="Name" type="text"/>
                        <input class="input" id="email" placeholder="Email Address" type="text"/>
                        <input class="input" id="phone" placeholder="Phone Number" type="text"/>
                        <textarea rows="4" cols="18" class="message" id="message" placeholder="Message"></textarea>
                        <div rows="2"></div>
                        <button onClick={this.handleSubmit.bind(this)} class="btn btn-primary" id="send">Send</button>
                    </form>
                </div>
                <div class="col-xs-6">
                    <h3>If you'd like to contact me for anything, job opportunities, suggestions for me,
                    to talk about the Linux OS, or anything, feel free to use this form here
                    and go ahead and send me an email. I will try to get back to you if possible.
                    Please do not harrass me or spam me with anything...</h3>
                    <h3>I enjoyed making this webpage as well as all other webpages in my portfolio,
                    but, keep in mind, the majority, if not all, webpages are a work in progress.</h3>
                    <h3>Further down the page are links to my social media
                    profiles. Feel free to contact me there as well.</h3>
                    <h3>Thank you! Have a great day!</h3>
                </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
      <div class="foot">
        <h1>Find me on the web</h1>
        <h1><a href=
        "https://www.linkedin.com/in/corey-dunn-47b2a8121"><i aria-hidden=
        "true" class="fa fa-linkedin-square"></i></a> <a href=
        "https://plus.google.com/100360379352024452128/posts"><i aria-hidden="true"
        class="fa fa-google-plus"></i></a> <a href=
        "https://www.facebook.com/corey.dunn.963"><i aria-hidden="true"
        class="fa fa-facebook-official"></i></a> <a href=
        "https://github.com/SmileAwhile"><i aria-hidden="true" class=
        "fa fa-git-square"></i></a></h1>
        <div class="signed">
          <h2>This page was made by Corey Dunn using React in 2016.</h2>
        </div>
      </div>
    </footer>

      </div>
    );
  }
}
