

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
			marked(text)
		);
	}
});

$('#textInput').bind('input propertychange', function() {
			var text1 = $("#textInput").val();

			ReactDOM.render(
				<markdownPreview text = {text1} />,
				document.getElementById('test')
			);
});
