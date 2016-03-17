const express = require('express')
const app = express()

const path = require('path')
const WebFlight = require('../..')

// options :: Object
  // siteUrl: String                (required)
  // assetsPath: String|Array   (required)
  // assetsRoute: String|Array  (required)
  // wfPath: String             (optional - defaults to '/wfPath')
  // wfRoute: String            (optional - defaults to '/wfRoute')
  // seedScript: String         (optional - defaults to 'wf-seed.js')
  // routes: Object             (required)

  //  assetsPath: ''/['', ''],
  //  assetsRoute: ''/['', ''],
  //  wfPath: ''/Default(__dirname + '/wfPath'),
  //  wfRoute: ''/Default('/wfRoute'),
  //  seedScript: ''/Default('wf-seed.js'),
  //  routes: {
  //    '/about.html': 'path/to/about.html'
  //  }

const wfObj = {
  siteUrl: 'http://localhost:3000',
  assetsPath: [path.join(__dirname, 'img'), path.join(__dirname, 'videos')],
  assetsRoute: ['bird-imgs/', 'bird-videos/', 'other-imgs/'],
  routes: {
    '/': path.join(__dirname, 'index.html'),
    '/how.html': path.join(__dirname, 'how.html')
  }
}

const wf = new WebFlight(wfObj, __dirname)

wf.init()
wf.start()

app.use(wf.watch.bind(wf))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/img/*', (req, res) => {
  res.sendFile(__dirname + req.url)
})

app.get('/birdVid.ogv', (req, res) => {
  res.sendFile(__dirname + '/videos/birdVid.ogv')
})

app.get('/wf', (req, res) => {
  res.sendFile(__dirname + '/wf/index.html')
})

app.get('/webflight.js', (req, res) => {
  res.sendFile(__dirname + '/webflight.js')
})

app.listen(3000)
