import React from "react";
import { Link } from "react-router";

require('jquery');

$(document).ready(function() {

    $('a[href ^= "#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top}, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

var subject;
var name;
var phone;
var emailBody;
var send;

export default class Layout extends React.Component {
  constructor() {
    super();

  }

  handleSend() {
    subject = $('#email').val();
    name = $('#name').val();
    phone = $('#phone').val();
    emailBody = $('#message').val();

    send= "mailto:cjdunn11@gmail.com?subject="+name+"_"+subject+"_"+phone+"&body="+emailBody;

    $('<a href="'+send+'"></a>')[0].click()
    send = "mailto:cjdunn11@gmail.com";
    console.log(send);
    forceUpdate();

  }
  render() {
    return (
      <div>
      <header id="anchor" class="navbar navbar-dark" styles="background-color: midnightblue" role="banner">
        <div class="container">
          <nav role="navigation">
            <div class="container-fluid">

              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Corey Dunn</a>
              </div>


              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li class="active"><a href="#AboutMe">ABOUT <span class="sr-only">(current)</span></a></li>
                  <li><a href="#Portfolio">PORTFOLIO</a></li><li><a href="#ContactMe">CONTACT</a></li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">React Projects<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="https://smileawhile.github.io/markdown/">Markdown Previewer</a></li>
                      <li><a href="https://smileawhile.github.io/campers/">Top Free Code Campers</a></li>
                      <li><a href="http://smileawhile.github.io/recipe/">Recipe Book</a></li>
                    </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">D3js Projects<span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="http://smileawhile.github.io/d3js/">Gross Domestic Product Bar Chart</a></li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Other Projects<span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="https://smileawhile.github.io/weatherApp.html">Local Weather App</a></li>
                        <li><a href="pom.html">Pomodoro Clock</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="tribute.html">Tribute Page</a></li>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More About Me<span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="https://github.com/SmileAwhile">View my Github</a></li>
                        <li><a href="https://www.linkedin.com/in/corey-dunn-47b2a8121">View my LinkedIn</a></li>

                        <li role="separator" class="divider"></li>
                        <li><a href="http://smileawhile.github.io/resume">My Resume</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="mailto:cjdunn11@gmail.com">Contact Me</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
      </header>
      <div class="margin">
        <div class="container">
          <div class="top well">
            <div class="row">
              <h2 class="col-xs-8" id="AboutMe">My name is Corey and I'm one
              semester away from my A.S. in Computer Science. I'd really love
              to do just about anything involving programming for a
                  career.<br/><br/><a href="http://smileawhile.github.io/resume">Link to my Resume</a></h2>
                  <img class="col-xs-4 smallerImg" src=
              "https://avatars1.githubusercontent.com/u/19420817?v=3&s=460"/>
            </div>
          </div>

          <div id="preview" class="well">
            {this.props.children}
          </div>

          <div class="bot well">
          <div class="row">
             <h1 class="centered" id="ContactMe">CONTACT ME</h1>
          </div>
          <div class="row">
              <div class="col-xs-6">
                  <form>
                      <input class="input" id="name" placeholder="Name" type="text"/>
                      <input class="input" id="email" placeholder="Email Address" type="text"/>
                      <input class="input" id="phone" placeholder="Phone Number" type="text"/>
                      <textarea rows="4" cols="18" class="message" id="message" placeholder="Message"></textarea>
                      <div rows="2"></div>
                      <button onClick={this.handleSend.bind(this)} class="btn btn-primary" id="send">Send</button>
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
                  <a href="#anchor"><button class="btn btn-danger">Back to Top</button></a>
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
          <h2>This page was made by me in 2016.</h2>
        </div>
      </div>
    </footer>

      </div>
    );
  }
}
