const express = require('express');
var app = module.exports = express();
var test = require('./test');

app.get('/', function (req, res) {
 return res.send('Hello world');
});

app.get('/test', test.index);

app.listen(process.env.PORT || 8080);
console.log('Express started on port 8080');
