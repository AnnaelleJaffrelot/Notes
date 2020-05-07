// models.js
const path = require('path')
const Sequelize = require('sequelize')

// configure connection to db host, user, pass - not required for SQLite
const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: path.join('tmp', 'db.sqlite') // SQLite persists its data directly to file
})

// Here we define our Article model with a title attribute of type string, and a body attribute of type text. By default, all tables get columns for id, createdAt, updatedAt as well.
const Article = sequelize.define('article', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT
})

// Create table
Article.sync()

module.exports = {
  Article
}
