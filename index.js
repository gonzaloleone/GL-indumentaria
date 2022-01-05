const express = require("express");
const app = express();
const port = 3000;

const { connection } = require('./db/config'); // conection traer config.js
app.use(express.json());
app.use(express.static('public'));

app.use(express.urlencoded({extended: false})); //lee formularios
//-------------ruta----------------------------------------

app.use('/gl',require('./routes/gl'))
//--------port listen ---------------------------------------------------
app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto:${port}`);
});
 app.on('error',(err)=>{
    console.log(`Error en la ejecuccion del servidor ${err}`);
});

module.exports = connection;