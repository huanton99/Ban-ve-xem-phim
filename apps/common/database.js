var Sequelize = require("sequelize");

var url = 'postgres://ejeweohykqcuvg:8a653f7e52496b2e8e3c336f932bd8ae38d667e38dbf3c0dae39fc9ebb7be638@ec2-52-5-1-20.compute-1.amazonaws.com:5432/dfj4t68do50df0'
var database = new Sequelize(url);

module.exports = database;