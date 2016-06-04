import React from "react";
import ReactDOM from "react-dom";


var marked = require('marked');
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});


var input;

export default class MarkdownPrev extends React.Component {
	constructor() {
		super();
		var start = "Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n* apples\n* oranges\n* pears\n\nNumbered list:\n\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in\nSpain.\n\n*[Corey Dunn](http://smileawhile.github.io)*";

		var text = marked(start);
		this.state = { text };
	}

	changePrev(event) {
		var text = marked(event.target.value);
		this.setState({ text });
	}


	render() {
		var value = this.state.currentValue;
		return (
			<div>
			<div>
			<textArea id="textInput" className="col-xs-4" rows="40" cols="50"
			defaultValue={"Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n* apples\n* oranges\n* pears\n\nNumbered list:\n\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in\nSpain.\n\n*[Corey Dunn](http://smileawhile.github.io)*"}
			onChange={this.changePrev.bind(this)} />
			</div>
			<div className="content col-xs-4" dangerouslySetInnerHTML={{__html: this.state.text}}></div>
			</div>
		);
	}
}
