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
		console.log(post)
	connection.query('INSERT INTO notes (title, post) VALUES (?,?)', [post.title,post.post], function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
},


	update(connection, id, post) {
	return new Promise((resolve,reject) =>{
	connection.query('UPDATE notes SET title= ?, post = ? WHERE id = ?', [post.title,post.post,id], function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
},


	delete(connection, id, post) {
	return new Promise((resolve,reject) =>{
	connection.query('DELETE FROM notes WHERE id = ?', [id], function (error, results, fields){
		if (error) return reject(error);
		resolve(results)
	})
})
}
}
