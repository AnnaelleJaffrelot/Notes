var mysql = require('mysql');
 
 // inversion de dépendnance en l'appeleant une fois et en la passant aux différents comoposants

'use strict';
/*const {Article} = require ('./ models')*/
const Hapi = require('@hapi/hapi');
const Joi = require("joi");
const postRoute = require("./routes/postRoute")


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

  var connection = mysql.createConnection({
  database: 'notes',
  host: "localhost",
  user: "root",
  password: ""
});
 connection.connect();
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