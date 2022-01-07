const express = require("express");
const app = express();
const port = 3000;

const { connection } = require('./db/config'); 
app.use(express.json());
app.use(express.static('public'));

app.use(express.urlencoded({extended: false})); 


app.use('/gl',require('./routes/gl'))

app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto:${port}`);
});
 app.on('error',(err)=>{
    console.log(`Error en la ejecuccion del servidor ${err}`);
});

module.exports = connection;