var mysql = require('mysql');
 
console.log('conneté');
 
var conn = mysql.createConnection({
  database: 'notes',
  host: "localhost",
  user: "root",
  password: ""
});
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


'use strict';
/*const {Article} = require ('./ models')*/
const Hapi = require('@hapi/hapi');
const Joi = require("joi");
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test',
 {useNewUrlParser: true, useUnifiedTopology: true});*/

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
    method: "GET",
    path: "/note/{id}",
    handler: (request, response) => {
        var notes = {};
        if(request.params.id == "1") {
            notes = {
                "id": "1",
                "id_user": "1",
                "name": "nom",
                "content": "lorem"
            }
        }
        return(notes);
    }});

    server.route({
    method: "POST",
    path: "/note",
   /* config:{
    	validate:{
    		payload:{
    			name : Joi.string().required(),
    			content : Joi.string().required(),
    		}
    	}
    },*/
    handler: (request, response) => {
        return(request.payload);
    }
});

    server.route({
    method: "DELETE",
    path: "/note/{id}",
    handler: (request, response) => {
        var notes = {};
        if(request.params.id == "1") {
            notes = {
                "id": "1",
                "id_user": "1",
                "name": "nom",
                "content": "lorem"
            }
        }
        return(notes);
    }});

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();