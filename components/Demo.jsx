

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





ReactDOM.render(

	<script>

	$('#textInput').bind('input propertychange', function() {
				var text1 = $("#textInput").val();

				document.getElementById('content').innerHTML =
					marked(text1);
	});

	</script>
	<div id="content"></div>,

	document.getElementById('test')

);
