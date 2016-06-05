var $ = require('jquery');

var recent;
var allTime;

$.ajax({
  url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
  dataType: 'json',
  cache: false,
  success: function(data) {
  //  console.log(data);
    recent = data;
    console.log(recent);
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
  }.bind(this),
  error: function(xhr, status, err) {
    console.error("ERROR ON AJAX");
  }.bind(this)
});
