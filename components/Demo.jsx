$('#textInput').bind('input propertychange', function() {
			var text1 = $("#textInput").val();



				ReactDOM.render(

						marked(text1),

					document.getElementById('test')

				);


});
