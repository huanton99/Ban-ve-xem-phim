var Sequelize = require("sequelize");

var url = 'postgres://postgres:1234@localhost:5432/lottecinema'
var database = new Sequelize(url);

module.exports = database;