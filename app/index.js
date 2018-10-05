const express = require('express');
var app = module.exports = express();

app.get('/', function (req, res) {
 return res.send('Hello world');
});

app.listen(process.env.PORT || 8080);
console.log('Express started on port 8080');
