module.exports = (server) => {
    server.get('/noticias', (req, res) => {
        res.render('noticias/noticias');
    });
};