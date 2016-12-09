var rasAppService = require("http"); // importando módulo http do node

var url = require("url"); // importando módulo url do node


function start(route, handle) {
	
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Requisição para " + pathname +" recebida.");

		// definindo que estou esperando dados com codificação UTF-8
		//request.setEnconding("utf8");

		/*	adicionando um event listener para a data que virá
		* 	passo a	passo preenchendo a variável postData com
		*	pedaços (chunk) que virão							*/
		request.addListener("data", function postCatcher(postDataChunk) {
			
			postData += postDataChunk;
			console.log("Recebido POST pedaço de dado '"+
				postDataChunk + "'.");
		});

		/*	adicionando um event listener para que a chamada do route
			seja feita apenas quando todos os dados do POST forem capturados */
		request.addListener("end", function postTrown() {
			/* passando o pepino pros handlers, inclusive os dados pegos */
			route(handle, pathname, response, postData);
		});		
		
	}
	
	rasAppService.createServer(onRequest).listen(8888);
	console.log("Servidor foi iniciado.");
}

exports.start = start; // exportando função start