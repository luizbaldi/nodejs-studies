const dbConnection = require('../../config/dbConnection');

module.exports = (server) => {
    server.get('/noticias', (req, res) => {
        
        const connection = dbConnection();

        connection.query('SELECT * FROM news', (err, data) => {
            if (err) {
                res.send(`Erro: ${err}`);
            } else {
                res.render('noticias/noticias', {news : data});
            }
        });
        // res.render('noticias/noticias');
    });
};