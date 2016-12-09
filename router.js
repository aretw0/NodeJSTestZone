function route(handle,pathname,response) {
	console.log("Prestes a rotear uma requisição para " + pathname);
	
	if(typeof handle[pathname] === 'function') {
		handle[pathname](response);
	} else {
		console.log("Manipulador (handler) não encontrado para " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Não encontrado");
		response.end();
	}
}

exports.route = route; // exportando função