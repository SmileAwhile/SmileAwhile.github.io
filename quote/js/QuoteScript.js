import React from 'react';

require('jquery');






export default class QuoteScript extends React.Component {

  handleClick() {
    console.log("pushed");
    $.getJSON("http://api.icndb.com/jokes/random", function(json) {
        $("#joke").fadeOut(500, function() {
          $(this).text('"' + json.value.joke.replace(/"|&quot;/g, "'") + '"').fadeIn(500);
        })

        $(".icon a").attr("href", "https://twitter.com/intent/tweet?&text=" + json.value.joke.replace(/"|&quot;/g, "'"));
      });

  };

  render() {
    return (
      <div class="container-fluid">
        <link rel="stylesheet" href="quote/css/style.css" />
        <div class = "parent row text-center">
          <div class = "child col-xs-12">
              <div class="row">
              <div class="col-xs-2">
              </div>
                <div class="jokeCNT col-xs-8">
                  <h1 id="joke">CLICK the button to start generating sweet, sweet Chuck Norris Jokes!</h1>
                    <div class="buttons row">
                      <div class="col-xs-2"></div>
                      <div class="icon col-xs-2">
                        <a class="a" href="https://twitter.com/intent/tweet?"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                      </div>
                      <div class="col-xs-2"></div>
                      <div class="col-xs-2">
                        <button onClick={this.handleClick.bind(this)} id = "getMessage" class = "btn btn-primary">Get Quote</button>
                      </div>
                      <div class="col-xs-2"></div>

                    </div>
                    </div>
                    <div class="col-xs-4">
                    </div>
                <div class="col-xs-12 sign"><p class="text-center">created by Corey</p></div>
                <div class="home col-xs-12"><a href="#/"><button class="btn btn-primary">Home</button></a></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
