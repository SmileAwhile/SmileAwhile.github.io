import React from "react";

export default class PortfolioPrev extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <link rel="stylesheet" href="css/portfolioPrev.css" />
        <div class="row">
          <h1 class="col-xs-12" id="Portfolio">
          PORTFOLIO</h1>
        </div>
        <div class=" row"><a href=
        "#/markdown"><img class=
        "col-xs-6 previewpic" src=
        "mark.png"/></a>
        <a href="#/quote"><img class="col-xs-6 previewpic" src="quotey.png"/></a>
        </div>
       <div class=" row"><a href="#/campers"><img class="col-xs-6 previewpic" src="camp.png"/></a>
           <a href="#/wiki"><img class="col-xs-6 previewpic" src="wikiy.png"/></a>
        </div>
        <div class=" row"><a href="#/twitch"><img class="col-xs-6 previewpic" src="twitchy.png"/></a>
            <a href="#/calc"><img class="col-xs-6 previewpic" src="calc.png"/></a>
        </div>
        <div class=" row">

        </div>
      </div>
    );
  }
}
