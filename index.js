'use strict'

const stringifyHtml = require('./lib/stringifyHtml')
const makeFilesObj = require('./lib/makeFilesObj')
const createHashObj = require('./lib/createHashObj')
const writeJs = require('./lib/writeJs')
const replaceHtml = require('./lib/replaceHtml')
const writeNewHtml = require('./lib/writeNewHtml')

// options :: Object
function WebFlight(options) {
  return new Promise((resolve, reject) => {
    const originalHtmlString = stringifyHtml(options.originalHtml)
    const filesObj = makeFilesObj(options.filesFolder)
    
    createHashObj(filesObj)
      .then(writeJs.bind(null, options.jsOutput))
      .then(replaceHtml.bind(null, originalHtmlString))
      .then(writeNewHtml.bind(null, options.htmlOutput))
      .then(resolve)
  })
}

module.exports = WebFlight