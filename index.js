
'use strict';
/*const {Article} = require ('./ models')*/
const Hapi = require('@hapi/hapi');

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
    handler: (request, response) => {
        return(request.payload);
    }
});

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();