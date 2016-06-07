import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import CalcScript from "../calc/js/calcScripts";
import Layout from "./Layout";
import MarkdownPrev from "../markdown/js/MarkdownPrev.js";
import PortfolioPrev from "./PortfolioPrev";
import QuoteScript from "../quote/js/QuoteScript";
import TopCampers from "../campers/js/module1";
import TwitchScript from "../twitch/js/TwitchScripts";
import WikiScript from "../wiki/js/wikiScripts";

require('./portfolioMod1');

const base = document.getElementById('base');

ReactDOM.render ((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={PortfolioPrev} />
      <Route path="/campers" component={TopCampers} />
      <Route path="/markdown" component={MarkdownPrev} />
      <Route path="/quote" component={QuoteScript} />
      <Route path="/wiki" component={WikiScript} />
      <Route path="/calc" component={CalcScript} />
      <Route path="/twitch" component={TwitchScript} />
    </Route>
  </Router>),
base);
