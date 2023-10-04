const JsonSerer = require("json-server");
const server = jsonserver.create();
const router = jsonserS.router("db.json")
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;



server.use(middlewares);
server.use(router);
server.listen(port);