var mysql = require('mysql');
 
 // inversion de dépendnance en l'appeleant une fois et en la passant aux différents comoposants

'use strict';
/*const {Article} = require ('./ models')*/
const Hapi = require('@hapi/hapi');
const Joi = require("joi");
const postRoute = require("./routes/postRoute")


const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: '0.0.0.0'
    });

  var connection = mysql.createPool({
  database: process.env.MYSQL_DATABASE || 'notes',
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  connectionLimit : 10
});

 postRoute(server, connection)
 await server.start();
 console.log('Server running on %s', server.info.uri);

 process.on('unhandledRejection', (err) =>{
 	console.log(err);
 	process.exit(1);
 });

  
    await server.start();
    console.log('Server running on %s', server.info.uri);
};
init();