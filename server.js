var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(3000);
console.log('server running @ localhost:3000');
