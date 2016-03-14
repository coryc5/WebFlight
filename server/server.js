'use strict'

const express = require('express')
const botGenerator = require('./botGenerator.js')
const app = express()

let count = 0

// Middleware func incrementing counter and injecting count into the request header
app.use((req, res, next) => {
  count++
  console.log('Number of requests made: ', count)
  req.headers.count = count
  next()
})

// Middleware func that starts electron-spawn at a specified count
app.use(botGenerator())

app.listen(3000, () => {
  console.log('listening on 3000')
})
