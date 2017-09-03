// Server
const server = require('./config/server');
const port = 9090;

// Load routes
require('./app/routes/home')(server);
require('./app/routes/noticias')(server);
require('./app/routes/admin')(server);

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}!`);
});