const postService = require("../services/postService")

const initPostRoute = function(server, connection){
	
	server.route({
    method: "GET",
    path: "/notes",
    handler: (request, h) => {
        return postService.get(connection);
    }
})


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
    handler: (request, h) => {
        return postService.insert(connection, request.payload)
        .catch(error => console.log(error));
    }
})

	server.route({
    method: "PUT",
    path: "/note/{idPost}",
    handler: (request, h) => {
        return postService.update(connection, request.params.idPost, request.payload)
        .catch(error => console.log(error));;
    }
})

	server.route({
    method: "DELETE",
    path: "/note/{idPost}",
    handler: (request, h) => {
        return postService.delete(connection, request.params.idPost);
    }
})

}

module.exports = initPostRoute