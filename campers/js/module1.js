import React from "react";

var $ = require('jquery');

var recent;
var allTime;
var recentUser = [];
var allTimeUser = [];
var stateOfRecent = true;

export default class TopCampers extends React.Component {
    constructor() {
    super();
    this.state = {data: []};
  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
      dataType: 'json',
      cache: false,
      success: function(data) {
        recent = data;
        for (var i=0; i<recent.length; i++) {
          recentUser.push("<div class='row'><div class='number col-xs-1'><h1>" + (i+1) + "</h1></div><div class='user col-xs-5'><img src=" + recent[i].img + " ><h1>  " + recent[i].username + "</h1></div><div class='thirty col-xs-3'><h1>" + recent[i].recent + "</h1></div><div class='time col-xs-3'><h1>" + recent[i].alltime + "  </h1></div></div>");
          self.setState({data: recentUser });
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
        allTime = data;
        for (var i=0; i<allTime.length; i++) {
          allTimeUser.push("<div class='row'><div class='number col-xs-1'><h1>" + (i+1) + "</h1></div><div class='user col-xs-5'><img src=" + allTime[i].img + " ><h1>  " + allTime[i].username + "</h1></div><div class='thirty col-xs-3'><h1>" + allTime[i].recent + "</h1></div><div class='time col-xs-3'><h1>" + allTime[i].alltime + "  </h1></div></div>");
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("ERROR ON AJAX");
      }.bind(this)
    });
  }

  handleClick() {
    if (stateOfRecent) {
      this.setState({data: allTimeUser });
      stateOfRecent = false;
    }
    else {
      this.setState({data: recentUser});
      stateOfRecent = true;
    }
  }

  render() {
    return (
      <div className="well">
        <div class="heading">
        <a href="http://smileawhile.github.io"><button class="btn btn-primary">Home</button></a>
        <h1>Brownie Points Leaderboard</h1>
        <button class="btn btn-danger" onClick={this.handleClick.bind(this)}>AllTime/Recent</button>
        <span class="sign">Built with React and Sass by Corey Dunn in 2016</span>
        </div>
        <div class="row"><div class="number col-xs-1"><h1>#</h1></div><div class="user col-xs-5"><h1>Camper Name</h1></div><div class="thirty col-xs-3"><h1>Recent</h1></div><div class="time col-xs-3"><h1>All Time</h1></div></div>
        <div className="output" dangerouslySetInnerHTML={{__html: this.state.data.join('')}}></div>
      </div>
    );
  }
}
