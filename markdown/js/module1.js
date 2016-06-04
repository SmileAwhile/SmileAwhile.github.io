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
