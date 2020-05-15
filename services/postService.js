const postService = require("../dao/postDao")
module.exports={
	get(connection){
		return postDao.get(connection)
		
	},
	insert(connection, post){
	return postDao.insert(connection, post)
},

update(connection, idPost, post){
	const updatedPost = {
		post: post.post,
		title: post.tite+ '(modified)'
	}
	return postDao.update(connection, idPost, updatedPost)
},
delete(connection, idPost){
	return postDao.delete(connection, idPost)
}
}