

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

var markdownPreview = React.createClass ({
	render: function() {
		return (
			console.log("text = ", text);
			marked(text);
		);
	}
});

$('#textInput').bind('input propertychange', function() {
			var text1 = $("#textInput").val();
			console.log("text1 = ", text1);

			ReactDOM.render(
				<markdownPreview text = {text1} />,
				document.getElementById('test')
			);
});
