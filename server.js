var rasAppService = require("http"); // importando módulo http do node

var url = require("url"); // importando módulo url do node


function start(route, handle) {
	
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Requisição para " + pathname +" recebida.");
		
		route(handle, pathname, response); // passando o pepino pros handlers
	}
	
	rasAppService.createServer(onRequest).listen(8888);
	console.log("Servidor foi iniciado.");
}

exports.start = start; // exportando função start