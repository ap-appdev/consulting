const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

require('dotenv').config()

const middlewares = require('./middlewares')
const routes = require('./routes')

const app = express()

app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app
