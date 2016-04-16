const path = require('path')
const express = require('express')
const WebFlight = require('../../')

const app = express()

const wfConfig = {
  siteUrl: 'http://localhost:9988/',
  assetsPath: [path.join(__dirname, 'imgs')],
  assetsRoute: ['imgs/'],
  routes: {
    '/': path.join(__dirname, 'index.html')
  },
  userCount: 10
}

const wf = new WebFlight(wfConfig, __dirname)

wf.init()

app.use(wf.watch.bind(wf))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/imgs/:img', (req, res) => {
  res.sendFile(path.join(__dirname, 'imgs', req.params.img))
})

app.get('/css/:css', (req, res) => {
  res.sendFile(path.join(__dirname, 'css', req.params.css))
})

app.get('/js/:js', (req, res) => {
  res.sendFile(path.join(__dirname, 'js', req.params.js))
})

app.listen(9988)
