import React from 'react';

var input = "";
var result = 0;

export default class CalcScript extends React.Component {
  constructor() {
    super();
    this.state = {output: 0};
  }

  handleAC() {
    input = "";
    this.setState({output: input});
  }

  handleCE() {
    input = input.substring(0, input.length - 1);
    this.setState({output: input});
  }

  handleMod() {
    input += "%";
    this.setState({output: input});
  }

  handleDiv() {
    input += "/";
    this.setState({output: input});
  }

  handleSev() {
    input += "7";
    this.setState({output: input});
  }

  handleEight() {
    input += "8";
    this.setState({output: input});
  }

  handleNine() {
    input += "9";
    this.setState({output: input});
  }

  handleMult() {
    input += "*";
    this.setState({output: input});
  }

  handleFour() {
    input += "4";
    this.setState({output: input});
  }

  handleFive() {
    input += "5";
    this.setState({output: input});
  }

  handleSix() {
    input += "6";
    this.setState({output: input});
  }

  handleMin() {
    input += "-";
    this.setState({output: input});
  }

  handleOne() {
    input += "1";
    this.setState({output: input});
  }

  handleTwo() {
    input += "2";
    this.setState({output: input});
  }

  handleThree() {
    input += "3";
    this.setState({output: input});
  }

  handlePlus() {
    input += "+";
    this.setState({output: input});
  }

  handleDec() {
    input += ".";
    this.setState({output: input});
  }

  handleZero() {
    input += "0";
    this.setState({output: input});
  }

  handleAns() {

  }

  handleEquals() {
    result = eval(input);
    this.setState({output: result});
    input = "";
  }



  render() {
    return (
      <div class="container-fluid">
        <link rel="stylesheet" href="calc/css/style.css" />
          <div class="home text-center"><a href="#/"><button class="btn">HOME</button></a></div>
          <div id="wrapper" class="outer row">
              <div class="window well">
              <h4>Corey's Calculator</h4>
                  <div class="output well">
                  <h5 id="output">{this.state.output}</h5>
                  </div>
                  <div class="buttons row">
                      <button onClick={this.handleAC.bind(this)} id="AC" class="btn col-xs-2">AC</button>

                      <button onClick={this.handleCE.bind(this)} id="CE" class="btn col-xs-2">CE</button>

                      <button onClick={this.handleMod.bind(this)} id="mod" class="btn col-xs-2">%</button>

                      <button onClick={this.handleDiv.bind(this)} id="div" class="btn col-xs-2">/</button>
                  </div>
                  <div class="buttons row">
                      <button onClick={this.handleSev.bind(this)} id="sev" class="btn col-xs-2">7</button>

                      <button onClick={this.handleEight.bind(this)} id="eight" class="btn col-xs-2">8</button>

                      <button onClick={this.handleNine.bind(this)} id="nine" class="btn col-xs-2">9</button>

                      <button onClick={this.handleMult.bind(this)} id="mult" class="btn col-xs-2">*</button>
                  </div>
                  <div class="buttons row">
                      <button onClick={this.handleFour.bind(this)} id="four" class="btn col-xs-2">4</button>

                      <button onClick={this.handleFive.bind(this)} id="five" class="btn col-xs-2">5</button>

                      <button onClick={this.handleSix.bind(this)} id="six" class="btn col-xs-2">6</button>

                      <button onClick={this.handleMin.bind(this)} id="min" class="btn col-xs-2">-</button>
                  </div>
                  <div class="buttons row">
                      <button onClick={this.handleOne.bind(this)} id="one" class="btn col-xs-2">1</button>

                      <button onClick={this.handleTwo.bind(this)} id="two" class="btn col-xs-2">2</button>

                      <button onClick={this.handleThree.bind(this)} id="three" class="btn col-xs-2">3</button>

                      <button onClick={this.handlePlus.bind(this)} id="plus" class="btn col-xs-2">+</button>
                  </div>
                  <div class="buttons row">
                      <button onClick={this.handleDec.bind(this)} id="dec" class="btn col-xs-2">.</button>

                      <button onClick={this.handleZero.bind(this)} id="zero" class="btn col-xs-2">0</button>

                      <button onClick={this.handleAns.bind(this)} id="ans" class="btn col-xs-2">Ans</button>

                      <button onClick={this.handleEquals.bind(this)} id="equals" class="btn col-xs-2">=</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
