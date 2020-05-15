module.exports = {
	get(connection) {
	return new Promise((resolve,reject) =>{
	connection.query('SELECT * FROM notes', function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
},

	insert(connection, post) {
	return new Promise((resolve,reject) =>{
	connection.query('INSERT INTO notes (title, post) VALUES (?,?)', [post.title,post.post], function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
},


	update(connection, idPost, post) {
	return new Promise((resolve,reject) =>{
	connection.query('UPDATE notes SET title= ?, post = ? WHERE idPost = ?', [post.title,post.post,idPost], function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
},


	delete(connection, idPost, post) {
	return new Promise((resolve,reject) =>{
	connection.query('DELETE FROM notes WHERE idPost = ?', [idPost], function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
}
}
