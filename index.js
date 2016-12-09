var server = require("./server"); // importando server.js
var router = require("./router"); //importando router.js
var requestHandlers = require("./requestHandlers"); // importando requestHandlers.js

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
 
server.start(router.route, handle); // iniciando servidor