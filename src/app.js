const express = require('express');

const morgan = require('morgan');
const conexionBD = require('./conexion_bd');

const rutasGenero = require('./routes/ruta_genero');
const rutasCancion = require('./routes/ruta_cancion');
const rutasAlbum = require('./routes/ruta_album');

const app = express()
require('dotenv').config()
//Conexión a la BD
conexionBD();

//Configuraciones
app.set("name","disquera-api-sobi");
app.set("port",process.env.PORT || 100);
app.set("host",process.env.HOST || 'localhost');


//Midlewares
app.use(express.json());
app.use(morgan("dev"));


//public
app.use(express.static('public'));


//rutas
app.use("/genero",rutasGenero);
app.use("/cancion", rutasCancion);
app.use("/album", rutasAlbum);


module.exports=app;