import React from "react";

export default class PortfolioPrev extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <link rel="stylesheet" href="css/portfolioPrev.css" />
            <h1 id="Portfolio">PORTFOLIO</h1>
        <div class="container">
          <div class="row">
          <div class='col-md-6 col-xs-12'><a href="#/recipe"><img class="thumb" src='images/recipe.png'/></a></div>
          <div class='col-md-6 col-xs-12'><h1>Recipe Book</h1>
            <h3>App uses React and shows index of currently saved recipes.<br/>
              Clicking on Recipe gives the list of ingredients for the recipe.
              <br/>You can save new recipes and delete old ones.</h3></div>
          </div>
          <div class="row">
          <div class='col-md-6 col-xs-12'><a href="http://smileawhile.github.io/d3js/"><img class="thumb" src='images/Domes.png'/></a></div>
          <div class='col-md-6 col-xs-12'><h1>Gross Domestic Product</h1>
            <h3>App uses D3js to get data from JSON URL and display bar chart to visualize data.<br/>
                On mouse hover tooltip shows specific data for specified date.</h3></div>
          </div>
          <div class="row">
          <div class='col-md-6 col-xs-12'><a href="#/markdown"><img class="thumb" src='images/markdown.png'/></a></div>
          <div class='col-md-6 col-xs-12'><h1>Markdown Previewer</h1>
            <h3>App uses React to take Markdown format input from text area and show a live preview
                of the input converted as the user types into the text area.</h3></div>
          </div>
          <div class="row">
          <div class='col-md-6 col-xs-12'><a href="#/campers"><img class="thumb" src='images/campers.png'/></a></div>
          <div class='col-md-6 col-xs-12'><h1>Brownie Points Leaderboard</h1>
            <h3>App uses React to display the top brownie point earners from Free Code Camp.<br/>
              App gets leadboard info from JSON URL.
              Leaderboard can be sorted by recent history or all time leaders</h3></div>
          </div>
          <div class="row">
          <div class='col-md-6 col-xs-12'><a href="#/quote"><img class="thumb" src='images/quote.png'/></a></div>
          <div class='col-md-6 col-xs-12'><h1>Random Chuck Norris Joke Generator</h1>
            <h3>App uses Jquery and makes call to JSON URL to grab a random joke.
            <br/>
            Whatever the current random joke is can be tweeted on
            twitter by clicking twitter icon.</h3></div>
          </div>
          <div class="row">
          <div class='col-md-6 col-xs-12'><a href="#/wiki"><img class="thumb" src='images/wiki.png'/></a></div>
          <div class='col-md-6 col-xs-12'><h1>Wikipedia Search</h1>
            <h3>App communicates with wiki api to find searches relevant to Whatever
                is put in the search box.<br/>
                You can then click on any result to be taken to the corresponding wiki article.<br/>
                You can also choose to click a button to be taken to a random wiki article.</h3></div>
          </div>
          <div class="row">
          <div class='col-md-6 col-xs-12'><a href="#/twitch"><img class="thumb" src='images/twitch.png'/></a></div>
          <div class='col-md-6 col-xs-12'><h1>Twitch Streamer Status</h1>
            <h3>App shows a static list of Twitch streamers and whether they are online or not.
            <br/>The app also shows a list of current popular streams.</h3></div>
          </div>

        </div>

      </div>
    );
  }
}
