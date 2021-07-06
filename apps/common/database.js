var Sequelize = require("sequelize");

var url = ''
var database = new Sequelize(url);

module.exports = database;