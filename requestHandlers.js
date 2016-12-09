/*importando module node.js: child_process*/
var exec = require("child_process").exec;

/* Declarando os manipuladores */
function start(response) {
	console.log("Manipulador 'start' foi chamado.");
	
	
	exec("find /", {timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
}

function upload(response) {
	console.log("Manipulador 'upload' foi chamado.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Ola Upload");
	response.end();	
}

/* exportando os manipuladores */
exports.start = start;
exports.upload = upload; 