//console.log ("hola"); 
require ('./config/config');

const express = require ('express');
const path = require ('path');

const indexRouter = require ('./routes');

const mongoose = require ('mongoose');

const server = express ();

mongoose
        .connect (
            "mongodb+srv://camimansi:sauvage1803@cluster1.eyzyw.mongodb.net/test"
            ) 
.then ((db) => console.log ('Base de datos conectada'))
.catch ((error) => console.log ('Ha ocurrido un error', err));


server.set ('views', path.join (__dirname, 'views'));
server.set ('view engine', 'ejs');

server.use (express.static(path.join(__dirname, 'public')));
server.use(express.json());
server.use (express.urlencoded ({encoded: false}));

server.use ('/', indexRouter);

server. listen (process.env.PORT, ()=> {
    console.log (`El servidor está corriendo en el Puerto ${process.env.PORT}`);
});