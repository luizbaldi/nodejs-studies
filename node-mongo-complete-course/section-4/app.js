// Server
const server = require('./config/server');

// Routes
require('./app/routes/home')(server);
require('./app/routes/noticias')(server);
require('./app/routes/admin')(server);

server.listen(9090, () => {
    console.log('Servidor iniciado!');
});