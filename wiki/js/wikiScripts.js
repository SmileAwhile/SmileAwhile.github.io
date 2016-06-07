import React from 'react';

require('jquery');

$(document).on("keypress", 'form', function (e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
        e.preventDefault();
        return false;
    }
});


export default class WikiScript extends React.Component {

  handleChange() {
    var queryData = $("#searchBox").val();
    console.log(queryData);

    var remoteUrlWithOrigin = "https://en.wikipedia.org/w/api.php?";
    var results;

    if (queryData != "") {
        $(".middle").html("");

        $.getJSON("http://en.wikipedia.org/w/api.php?action=opensearch&search="+queryData+"&format=json&callback=?", function(data) {

            results = data;

            for (var i=0; i<10; i++) {
                $(".middle").append("<a href='"+JSON.stringify(results[3][i]).replace(/\"/g, "")+"'><div class='well result'><h3>"+JSON.stringify(results[1][i])+"</h3><h4>"+JSON.stringify(results[2][i])+"</h4></div></a>");
            }
        }); // end json
    }
  }

  render() {
    return (
      <div class="container-fluid">
      <link rel="stylesheet" href="wiki/css/style.css" />
      <div class="top">
          <div class="heading text-center row">
              <div class="col-xs-4 home"><a href="#/"><button class="btn btn-primary">Home</button></a></div>
              <div class="col-xs-4 h"><h1>Wikipedia Viewer</h1>
              </div><div class="col-xs-4 s"><span><br/>created by Corey in 2016</span>
              </div>
              </div>
          <div class="rounded">
              <form id="takeAction">
                  <div class="row">
                  <input onChange={this.handleChange.bind(this)} type="text" id="searchBox" name="search" required class="search-box" placeholder="Search..."/>
                  </div>
              </form>
              <div class="buttons row">
                  <div class="col-xs-5">
                  </div>
                  <div class="col-xs-2">
                      <a href="https://en.wikipedia.org/wiki/Special:Random"><button id="random" class="btn btn-primary">Random Wiki</button></a>
                  </div>
                  <div class="col-xs-5"></div>
                  </div>
          </div>

      </div>
      <div class="middle text-center">
          <h4 class="instructions">Enter a search term or pick a random wiki</h4>
      </div>
      </div>
    );
  }
}
