const JsonSerer = require("json-server");
const server = Jsonserver.create();
const router = JsonserS.router("db.json")
const middlewares = JsonServer.defaults();
const port = process.env.PORT || 3001;



server.use(middlewares);
server.use(router);
server.listen(port);