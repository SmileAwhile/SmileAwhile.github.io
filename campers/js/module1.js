import React from "react";

var $ = require('jquery');  // for ajax

// variables for data objects and arrays
var recent;
var allTime;
var recentUser = [];
var allTimeUser = [];

// state of toggle button
var stateOfRecent = true;

export default class TopCampers extends React.Component {
    constructor() {
    super();
    this.state = {data: []};
  }

  componentDidMount() {
    var self = this;  // to referece this within ajax
    $.ajax({
      url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
      dataType: 'json',
      cache: false,
      success: function(data) {
        recent = data;  // set JSON object to recent variable
        for (var i=0; i<recent.length; i++) {  // loop to create array with html and object elements
          recentUser.push("<div class='row'><div class='number col-xs-1'><h1>" + (i+1) + "</h1></div><div class='user col-xs-5'><img src=" + recent[i].img + " ><h1>  " + recent[i].username + "</h1></div><div class='thirty col-xs-3'><h1>" + recent[i].recent + "</h1></div><div class='time col-xs-3'><h1>" + recent[i].alltime + "  </h1></div></div>");
          self.setState({data: recentUser });  // set state for first render
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("ERROR ON AJAX");
      }.bind(this)
    });

    $.ajax({
      url: "https://fcctop100.herokuapp.com/api/fccusers/top/alltime",
      dataType: 'json',
      cache: false,
      success: function(data) {
        allTime = data;  // set JSON object to all time data
        for (var i=0; i<allTime.length; i++) {  // loop to create array with html and object elements
          allTimeUser.push("<div class='row'><div class='number col-xs-1'><h1>" + (i+1) + "</h1></div><div class='user col-xs-5'><img src=" + allTime[i].img + " ><h1>  " + allTime[i].username + "</h1></div><div class='thirty col-xs-3'><h1>" + allTime[i].recent + "</h1></div><div class='time col-xs-3'><h1>" + allTime[i].alltime + "  </h1></div></div>");
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("ERROR ON AJAX");
      }.bind(this)
    });
  }

  // on toggle button click
  handleClick() {
    if (stateOfRecent) {
      this.setState({data: allTimeUser });  // set state to all time
      stateOfRecent = false;  // set toggle to false
    }
    else {
      this.setState({data: recentUser});  // set state to recent
      stateOfRecent = true;  // set toggle to true
    }
  }

  // render labels, buttons, and the array of html and object elements
  render() {
    return (
      <div>
        <link rel="stylesheet" href="campers/css/style.css" />
        <div className="well">
          <div class="heading">
          <a href="#/"><button class="btn btn-primary">Home</button></a>
          <h1>Brownie Points Leaderboard</h1>
          <button class="btn btn-danger" onClick={this.handleClick.bind(this)}>AllTime/Recent</button>
          <span class="sign">Built with React and Sass by Corey Dunn in 2016</span>
          </div>
          <div class="row"><div class="number col-xs-1"><h1>#</h1></div><div class="user col-xs-5"><h1>Camper Name</h1></div><div class="thirty col-xs-3"><h1>Recent</h1></div><div class="time col-xs-3"><h1>All Time</h1></div></div>
          <div className="output" dangerouslySetInnerHTML={{__html: this.state.data.join('')}}></div>
        </div>
        <a href="#/"><button class="btn btn-primary">Home</button></a>
      </div>
    );
  }
}
