// importando querystring, módulo interno do node
var querystring = require("querystring");

/* Declarando os manipuladores */
function start(response, postData) {
	console.log("Manipulador 'start' foi chamado.");
	
	var body = '<html>' +
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<form action="/upload" method="post">'+
	'<textarea name="text" rows="20" cols="60"></textarea>'+
	'<imput type="submit" value="Submit text" />'+
	'</form>'+
	'</body>'+
	'</html>';

	// respondendo
	response.writeHead(200, {"Content-Type": "text/html"});
	response.writeHead(200, {"token": "1234"});
	response.write(body);
	response.end();		

}

function upload(response, postData) {
	console.log("Manipulador 'upload' foi chamado.");

	// respondendo
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write(" Você enviou: "+
		querystring.parse(postData).text);
	response.end();	
}

/* exportando os manipuladores */
exports.start = start;
exports.upload = upload; 