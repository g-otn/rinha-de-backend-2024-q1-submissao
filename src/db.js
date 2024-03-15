const postgres = require('postgres');
const os = require('os');

const packageName = require('../package.json').name;
const name = `${packageName} Postgres.js ${os.hostname}`;

const sql = postgres({
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'rinha',
  max: 10,
  connection: {
    application_name: name,
  },
});

module.exports = sql;
