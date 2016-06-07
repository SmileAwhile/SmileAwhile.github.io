import React from 'react';

require('jquery');

var list = [];
var popular = [];

export default class TwitchScript extends React.Component {
  constructor() {
    super();
    this.state = { list };
    this.state = { popular }
  }


  componentDidMount() {
    var self = this;
    var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "brunofin", "comster404", "voyboy" ];

    // loop over each of the streamers
    for (var i=0; i<streamers.length; i++) {
        // get twitch api objects
        $.getJSON('https://api.twitch.tv/kraken/streams/' + streamers[i] + "?&callback=?")
        .done(function(data) {

            if (data.status == 422 ) {
              list.push("<div class='row well offline user'><div class='icon col-xs-1'><img class='logo'  src='offline.png'></div><div class='col-xs-2'><h4 class='name'>"+data.message.split("'")[1]+"</h4></div><div class='status col-xs-9'><h4>No Longer Available</h4></div></div>");
              self.setState({list})
            }
            // if online
            else if (data.stream !== null) {
                // add to html
                list.push("<a href='"+data.stream.channel.url+"'><div class='row well online user'><div class='icon col-xs-1'><img class='logo'  src='"+data.stream.channel.logo+"'></div><div class='col-xs-2'><h4 class='name'>"+data.stream.channel.display_name+"</h4></div><div class='status col-xs-9'><h4>"+data.stream.game+"</h4></div></div></a>");
                self.setState({list});
            }
            // if offline
            else {

                 list.push("<a href='http://twitch.tv/"+data._links.channel.split("/")[5]+"'><div class='row well offline user'><div class='icon col-xs-1'><img class='logo'  src='offline.png'></div><div class='col-xs-2'><h4 class='name'>"+data._links.self.split("/")[5]+"</h4></div><div class='status col-xs-9'><h4>OFFLINE</h4></div></div></a>");
                 self.setState({list});
            }
        }) // end .done

            // if deactivated
            .fail(function(error) {
                list.push("<div class='row well offline user'><div class='icon col-xs-1'><img class='logo'  src='offline.png'></div><div class='col-xs-2'><h4 class='name'>"+error.responseJSON.message.split("'")[1]+"</h4></div><div class='status col-xs-9'><h4>No Longer Available</h4></div></div>");
                self.setState({list})
        });  // end .fail
    } // end for loop

        // add popular streams
        $.getJSON('https://api.twitch.tv/kraken/streams?&callback=?')
        .done(function(data) {
            for (var i=0; i<10; i++) {
                popular.push("<a href='"+data.streams[i].channel.url+"'><div class='col-xs-3 well rightFrame row'><h6 class='col-xs-6'>"+data.streams[i].channel.display_name+"</h6><h6 class='col-xs-6'>"+data.streams[i].game+"</h6></div></a>");
                self.setState({popular});
            }  // end for loop
        });  // end .done
  }

  handleClick() {
    // reset on home
    list = [];
    popular = [];
  }

  render() {
    return (
      <div class="container-fluid">
        <link rel="stylesheet" href="twitch/css/style.css" />
          <div class="outerMost row">
              <div class="windowFrame col-xs-8">
                  <div class="windowHead well row">
                      <div class="col-xs-10">
                      <h1>TWITCH STREAMERS</h1>
                      </div>
                      <div class="col-xs-2 wrapper">
                      <a href="#/"><button onClick={this.handleClick.bind(this)} class="home row btn btn-primary">Home</button></a><p><br />A Page by Corey in 2016</p>
                      </div>
                  </div>
                  <div class="windowContents">
`                   <div className="out" dangerouslySetInnerHTML={{__html: list.join('')}}></div>
              </div>
              <div class="col-xs-2">
          </div>
      </div>

      <div id="log"></div>
        <div id="popular">
          <div class="col-xs-3 well rightFrame row">
            <h3 class="col-xs-2"></h3>
            <h3 class="col-xs-8 text-center rightTitle">POPULAR STREAMS</h3>
            <h3 class="col-xs-2"></h3>
          </div>
            <div className="out" dangerouslySetInnerHTML={{__html: popular.join('')}}></div>
        </div>
      </div>
    </div>
    );
  }
}
