const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",

  database: "nodejs",
  password: "abhi1289",
});

module.exports = pool.promise();
