'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')

const app = express()

const index = require('./routes/index.controller')

app.use(helmet())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// routes engine setup
app.use('/', index)

app.listen(process.env.PORT || 3000, () =>
  console.log('Server connected'))