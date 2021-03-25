const nconf = require('nconf')

nconf.argv().env()

nconf.file('defaults', {
  file: process.cwd() + '/app.config.json'
})

module.exports = nconf
