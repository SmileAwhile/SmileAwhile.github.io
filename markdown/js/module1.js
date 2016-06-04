var $ = require('jquery');

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

var MarkdownPreview = React.createClass ({
	render: function() {
		return (
			<div className="content" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
		);
	}
});

$('#textInput').bind('input propertychange', function() {
      var text1 = marked($("#textInput").val());
      console.log(text1);

			ReactDOM.render(
				<MarkdownPreview text={text1} />,
				document.getElementById('test')
			);
});
$('#textInput').val("Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n* apples\n* oranges\n* pears\n\nNumbered list:\n\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in\nSpain.\n\n*[Corey Dunn](http://smileawhile.github.io)*");

$(document).ready(function() {
	var text2 = marked($('#textInput').val());
	ReactDOM.render(
		<MarkdownPreview text={text2} />,
		document.getElementById('test')
	);
});
