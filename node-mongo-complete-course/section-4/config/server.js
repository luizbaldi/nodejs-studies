const express = require('express');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './app/views');

module.exports = server;