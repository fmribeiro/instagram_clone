var express = require("express");
var bodyParser = require("body-parser");
var mongoDB = require("mongodb");

var app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 3000;

app.listen(port);

console.log('Servidor HTTP está rodando na porta ' + port);

app.get('/', function (req, res) {
    res.send({ msg: 'Olá' })
})


