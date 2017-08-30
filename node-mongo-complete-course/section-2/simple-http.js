const http = require('http');

const server = http.createServer((req, res) => {
    
    switch(req.url) {
        case '/tech':
            res.end('<html><body>Welcome to tech section!</body></html>');
            break;
        case '/potatoe':
            res.end('<html><body>Requesting potatoe route!</body></html>');
            break;
        default:
            res.end('<html><body>Default Page</body></html>');
            break;
    }
    
});
server.listen(9090);