

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

$('#textInput').bind('input propertychange', function() {
			var text1 = $("#textInput").val();

			document.getElementById('content').innerHTML =
				marked(text1);
})
