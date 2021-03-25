const { Pool, types } = require('pg')
const config = require('../config')

const pool = new Pool({
  host: config.get('postgres:host'),
  database: config.get('postgres:database'),
  user: config.get('postgres:user'),
  password: config.get('postgres:password'),
  port: config.get('postgres:port')
})

const parseDate = function (val) {
  return val === null ? null : val.toString()
}
types.setTypeParser(types.builtins.DATE, parseDate)

module.exports = {
  query: (text, params) => pool.query(text, params)
}
