const mysql = require('mysql12');

const pool = mysql.createPool({
  host: 'localhost',
	user: 'root',
	password: 'mechanic',
	database: 'mechanic_app',
	waitforConnections: true,
	connectionLimit: 10,
	queueLimit: 0
})

module.exports = pool.promise();