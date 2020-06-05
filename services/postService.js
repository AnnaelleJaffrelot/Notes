const postDao = require("../dao/postDao")
module.exports={
	get(connection){
		return postDao.get(connection)
		
	},
	insert(connection, post){
	return postDao.insert(connection, JSON.parse(post))
},

update(connection, idPost, post){
	const updatedPost = {
		post: post.post,
		title: post.title,
	}
	return postDao.update(connection, idPost, updatedPost)
},
delete(connection, idPost){
	return postDao.delete(connection, idPost)
}
}