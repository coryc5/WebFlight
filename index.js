'use strict'

const path = require('path')

const stringifyHtml = require('./lib/stringifyHtml')
const makeFilesObj = require('./lib/makeFilesObj')
const hashFilesObj = require('./lib/hashFilesObj')
const writeJsDL = require('./lib/writeJsDL')
const writeJsUL = require('./lib/writeJsUL')
const replaceHtml = require('./lib/replaceHtml')
const writeNewHtml = require('./lib/writeNewHtml')
const botGenerator = require(('./src/botGenerator'))

function WebFlight (options) {
  Object.keys(options).forEach((key) => {
    this[key] = options[key]
  })

  let fileNamesArr = Object.keys(this.routes).map((file) => {
    return path.basename(file, '.html')
  })

  this.count = 0  // non-configurable
  this.fileNames = fileNamesArr // non-configurable

  this.wfPath = options.wfPath ? 'options.wfPath' : (__dirname + '/wfPath')
  this.wfRoute = options.wfRoute ? 'options.wfRoute' : ('/wfRoute')

  this.jsOutputDL = (() => {
    return fileNamesArr.map((file) => {
      return `${this.wfPath}/${file}-download.js`  // non-configurable
    })
  })()

  this.htmlOutput = (() => {
    return fileNamesArr.map((file) => {
      return `${this.wfPath}/wf-${file}.html`
    })
  })()  // non-configurable

  this.seedScript = options.seedScript
    ? options.seedScript
    : path.join(__dirname, 'wfPath/wf-seed.js') // default
}

// options :: Object
  // assetsPath: String|Array   (required)
  // assetsRoute: String|Array  (required)
  // wfPath: String             (optional)
  // wfRoute: String            (optional)
  //
  // originalHtml: .html file to be rebuilt
  // filesFolder: folder with files to be torrented
  // filesRoute: path on the server for files
  // jsOutputDL: location and name for webflight.js file
  // jsOutputUL: location and name for file seeding torrents
  // htmlOutput: location and name for rebuilt html file
  // route: route to redirect
  //
  //  assetsPath: ''/['', ''],
  //  assetsRoute: ''/['', ''],
  //  wfPath: ''/Default(__dirname + '/wfPath'),
  //  wfRoute: ''/Default('/wfRoute'),
  //  seedScript: ''/Default('wf-seed.js'),
  //  routes: {
  //    '/about.html': 'path/to/about.html'
  //  }

WebFlight.prototype.start = function () {
  const originalHtmlString = stringifyHtml(this.originalHtml)
  const filesObj = makeFilesObj(this.filesFolder, this.filesRoute)

  hashFilesObj(filesObj)
    .then(writeJsDL.bind(null, this.jsOutputDL))
    .then(writeJsUL.bind(null, this.jsOutputUL))
    .then(replaceHtml.bind(null, originalHtmlString, path.basename(this.jsOutputDL)))
    .then(writeNewHtml.bind(null, this.htmlOutput))
    .then(botGenerator.bind(null, this))
}

WebFlight.prototype.redirect = function (req, res, next) {
  const destination = req.originalUrl

  if (destination === '/count.check.4wf') {
    res.send({count: this.count})
  }

  if (path.extname(destination) === '.html' || path.extname(destination) === '') {
    console.log(++this.count, 'entering')

    res.on('finish', () => {
      setTimeout(function () {
        console.log(--this.count, 'exiting')
      }.bind(this), 10000)
    }).on('close', () => {
      setTimeout(function () {
        console.log(--this.count, 'exiting')
      }.bind(this), 10000)
    })
  }

  if (destination === this.route || (!path.extname(req.originalUrl) && destination === path.basename(req.originalUrl))) {
    res.sendFile(this.htmlOutput)
  } else {
    next()
  }
}

module.exports = WebFlight
