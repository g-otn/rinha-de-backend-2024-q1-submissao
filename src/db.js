const postgres = require('postgres');

const sql = postgres({
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'rinha',
  max: 10,
});

module.exports = sql;
