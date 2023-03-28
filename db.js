const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jit_institute',
  waitForConnections: true
});

module.exports = pool;
