const express = require('express');
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('home/index');
});

server.get('/formulario_inclusao_noticia', (req, res) => {
    res.render('admin/form_add_noticia');
});

server.get('/noticias', (req, res) => {
    res.render('noticias/noticias');
});

server.listen(9090, () => {
    console.log('Servidor iniciado!');
});