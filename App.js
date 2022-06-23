var express = require('express') //Lllamamos express y lo guardamos en una variable.

var app = express();

var port = process.env.port || 8080  //Puerto por donde nos vamos a conetar


app.get('/',function(req, res){
    res.json("Hola pelotudo \n {mensaje: Soy un mensaje}")
})



app.listen(port);
console.log("Api escuchando")