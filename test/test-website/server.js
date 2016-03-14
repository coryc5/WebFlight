const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/img/*', (req, res) => {
  res.sendFile(__dirname + req.url)
})

app.get('/birdVid.ogv', (req, res) => {
  res.sendFile(__dirname + '/videos/birdVid.ogv')
})

app.listen(3000)
