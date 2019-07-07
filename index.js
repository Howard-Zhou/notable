var express = require("express");
var path = require("path");
var cors = require('cors');

console.log(__dirname)
var app = express();
app.use(express.static(__dirname));
app.use(cors());

require('./routes')(app)

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: err.message, error: err });
});

app.listen(8080);
console.log("Listening to PORT 8080");

module.exports.app = app;
