var express = require("express");

var app = express();

app.get('/', function(req, res){
    var datos = {};
    var ip = req.ip.split(':').slice(-1).toString();
    var language = req.headers['accept-language'].split(',')[0].toString();
    console.log();
    datos.ipadress = ip;
    datos.language = language;
    datos.software = req.headers['user-agent'];
    res.end(JSON.stringify(datos));
});

app.listen(8080, function(err){
    if(err) throw err;
    console.log('Servidor iniciado en 8080');
});