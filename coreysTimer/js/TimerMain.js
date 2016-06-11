import React from 'react';
import { Panel, Accordion, Modal, MenuItem, DropdownButton, SplitButton, Button, ButtonToolbar, form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

require('jquery');


$(document).ready(function() {

    // code for timer graphic was repurposed from: http://thecodeplayer.com/walkthrough/make-gauge-charts-using-canvas-and-javascript

    window.onload = function(){
        //canvas initialization
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        //dimensions
        var W = canvas.width;
        var H = canvas.height;
        //Variables
        var degrees = 360.00;    // set degrees to 360 (full)
        var new_degrees = 360.00;
        var difference = 0;
        var color = "cadetblue";
        var bgcolor = "#222";
        var text;
        var animation_loop, redraw_loop;
        var timer = 1500.00;  // 25 min
        var regen = 300.00;   // 5 min
        var timeLeft = 0;
        var regenLeft = 0;
        var convert = 360.00 / timer;  // convert time decrement to degrees
        var regConv = 360.00 / regen;  // convert time increment to degrees
        var state = true;  // whether work or regen
        var minutes;
        var isPaused = false;

        // audio files
        var workSound = new Audio("../work.mp3");
        var regenSound = new Audio("regen.mp3");


        $("#canvas").on('click', function() {
          isPaused = !isPaused;
        });

        function updateWork() {
            $("#workLength").html(Math.floor(Math.floor(timer) / 60));  // update display with current minute value of timer
        }

        function updateRegen() {
            $("#regenLength").html(Math.floor(Math.floor(regen) / 60));  // update display with current minute value of regen
        }


        function init()
        {
            //Clear the canvas everytime a chart is drawn
            ctx.clearRect(0, 0, W, H);

            //Background 360 degree arc
            ctx.beginPath();
            ctx.strokeStyle = bgcolor;
            ctx.lineWidth = 30;
            ctx.arc(W/2, H/2, 100, 0, Math.PI*2, false); //you can see the arc now
            ctx.stroke();

            //gauge will be a simple arc
            //Angle in radians = angle in degrees * PI / 180
            var radians = degrees * Math.PI / 180;
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 30;
            //The arc starts from the rightmost end. If we deduct 90 degrees from the angles
            //the arc will start from the topmost end
            ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false);
            //you can see the arc now
            ctx.stroke();

            //Lets add the text
            ctx.fillStyle = color;
            ctx.font = "50px bebas";
            if (state) {
                $(".status").html("<h1>Working...</h1>");
                timeLeft = Math.floor(degrees / convert);  // total seconds
                minutes = timeLeft / 60;  // minutes
                if (timeLeft - Math.floor(minutes) * 60 < 10) {  // if less than 10 seconds left in the current minute
                    text = Math.floor(minutes) + ":0" + (timeLeft - Math.floor(minutes) * 60);    // update display with min and sec adding in 0 before single digit second
                } else {
                text = Math.floor(minutes) + ":" + (timeLeft - Math.floor(minutes) * 60);   // update display with minutes and seconds
                }
            }
            else {
                start();
              }
            //Lets center the text
            //deducting half of text width from position x
            var text_width = ctx.measureText(text).width;
            //adding manual value to position y since the height of the text cannot
            //be measured easily. There are hacks but we will keep it manual for now.
            ctx.fillText(text, W/2 - text_width/2, H/2 + 15);
        }

        function draw()
        {

          if (!isPaused){
            //Cancel any movement animation if a new chart is requested
            if(typeof animation_loop != undefined) clearInterval(animation_loop);

            //random degree from 0 to 360
            new_degrees = 360;                      // left over
            difference = new_degrees - degrees;     // left over
            //This will animate the gauge to new positions
            //The animation will take 1 second
            //time for each frame is 1sec / difference in degrees
            animation_loop = setInterval(animate_to, 1);
          }
        }

        //function to make the chart move to new degrees
        function animate_to()
        {
            if ( state ) {  // if working
                clearInterval(animation_loop);
                degrees = degrees - convert; // subtract the equivalent amount of degrees in seconds
                if (degrees < 1) {  // if degrees less than one (empty)
                    regenSound.play();
                    state = false;   // switch to regen
                }

            }
            else {
                clearInterval(animation_loop);
                degrees = degrees + regConv;  // add the equivalent amount of degrees in seconds
                if (degrees > 359) {  // if degrees greater than 359 (full)
                    workSound.play();
                    state = true;  // switch to work
                }
            }


            init();
        }

        //Lets add some animation for fun
        draw();

        redraw_loop = setInterval(draw, 1000); //Draw a new chart every 1 seconds


        window.startTimer = function(time) {  // reset timer
            timer = time;
            start();
        }
        var start = function() {
          degrees = 360.00;               // degrees back to 360 (full)
          convert = 360.00 / timer;       // redo timer conversion
          regConv = 360.00 /regen;        // redo regen conversion
          isPaused = false;
        }
    }
});

var hours = [];
for (var i=0; i<25; i++) {
  hours.push(<option value={i}>{i}</option>);
}
var minutes = [];
for (var i=0; i<60; i++) {
  minutes.push(<option value={i}>{i}</option>);
}
var seconds = [];
for (var i=0; i<60; i++) {
  seconds.push(<option value={i}>{i}</option>);
}



export default class TimerMain extends React.Component {
  constructor() {
    super();
    this.state = { showModal: false };
    this.state = { selectTimer: false };

    window.timers;

    if (localStorage.timers != "[]" && localStorage.timers != undefined) {
      window.timers = JSON.parse(localStorage.timers);
    }
    else {
      window.timers = [{hours: 0, minutes: 1, seconds: 30},
        {hours: 1, minutes: 30, seconds: 0},
        {hours: 0, minutes: 50, seconds: 0}];
    }

    function zeroPad(num, places) {
      var zero = places - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
    }

    window.update = function() {
      window.storedTimers = window.timers.map(function(v, i) {
        console.log(v.hours);
        var value = (v.hours * 60 * 60) + (v.minutes * 60) + v.seconds;
        console.log(value);
        return (
          <option value={value} key={i} >{zeroPad(v.hours, 2)}:{zeroPad(v.minutes, 2)}:{zeroPad(v.seconds, 2)}</option>
        )
      });
  }
  update();

  }  // end constructor

  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }

  selectTimer() {
    this.setState({ selectTimer: true});
  }
  closeTimer() {
    this.setState({ selectTimer: false});
  }
  timerChosen() {
    console.log("click");
    var timer = document.getElementById('SelectTimer').value;
    console.log(timer);

    startTimer(timer);



    this.setState({ selectTimer: false});
  }
  saveTimer() {
    var hoursSav = document.getElementById('Hours').value;
    var minutesSav = document.getElementById('Minutes').value;
    var secondsSav = document.getElementById('Seconds').value;

    window.timers.push({hours: hoursSav, minutes: minutesSav, seconds: secondsSav});
    localStorage.setItem("timers", JSON.stringify(window.timers));
    this.setState({ showModal: false });
    update();

  }
  removeChosen() {
    var index = document.getElementById('SelectTimer').selectedIndex;

    window.timers.splice(index, 1);
    localStorage.timers = JSON.stringify(window.timers);

    update();

    this.setState({ selectTimer: false });


  }


  render() {
    return (
      <div>
        <canvas id="canvas" width="300" height="300"></canvas>
        <div class="row frame">

            <div class="row">
              <ButtonToolbar>
                <Button bsStyle="success" bsSize="large" onClick={this.open.bind(this)}>Add Timer</Button>
                <Button bsStyle="primary" bsSize="large" onClick={this.selectTimer.bind(this)}>Select Timer</Button>
              </ButtonToolbar>
            </div>
        </div>
        <div class="row"><a href="http://smileawhile.github.io/"><h4 class="home">HOME</h4></a></div>

        <Modal show={this.state.selectTimer} onHide={this.closeTimer.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Select a Timer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="SelectTimer">
              <FormControl componentClass="select">
                {storedTimers}
              </FormControl>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button onClick={this.timerChosen.bind(this)} bsStyle="primary" bsSize="large">Select Timer</Button>
              <Button onClick={this.removeChosen.bind(this)} bsStyle="danger" bsSize="large">Delete Timer</Button>
              <Button onClick={this.closeTimer.bind(this)} bsSize="large">Close</Button>
            </ButtonToolbar>
          </Modal.Footer>

        </Modal>


        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Timer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
            <FormGroup controlId="Hours">
              <ControlLabel>Hours</ControlLabel>
              <FormControl componentClass="select">
                {hours}
              </FormControl>
            </FormGroup>
            <hr />
            <FormGroup controlId="Minutes">
              <ControlLabel>Minutes</ControlLabel>
              <FormControl componentClass="select">
                {minutes}
              </FormControl>
            </FormGroup>
            <hr />
            <FormGroup controlId="Seconds">
              <ControlLabel>Seconds</ControlLabel>
              <FormControl componentClass="select">
                {seconds}
              </FormControl>
            </FormGroup>


            </form>

          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button onClick={this.saveTimer.bind(this)} bsStyle="primary" bsSize="large">Save Timer</Button>
              <Button onClick={this.close.bind(this)} bsSize="large">Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>


      </div>
    );
  }
}
