const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("cities.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('JSON server is running');
})
