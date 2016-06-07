import React from "react";

require('./src/client.min.js');

export default class CamperPrev extends React.Component {
  constructor(){
    super();
  }
  componentDidMount() {
    require('./src/client.min.js');
  }
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="campers/css/style.css"/>
        <div id="app" class="fluid-container row">
          <script src="./campers/src/client.min.js"></script>
        </div>
        <a href="http://smileawhile.github.io"><button class="btn btn-primary">Home</button></a>
      </div>
    );
  }
}
