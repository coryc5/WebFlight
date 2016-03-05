'use strict'

const stringifyHtml = require('./lib/stringifyHtml')
const makeFilesArray = require('./lib/makeFilesArray')
const createHashObj = require('./lib/createHashObj')
const writeJs = require('./lib/writeJs')
const replaceHtml = require('./lib/replaceHtml')
const writeNewHtml = require('./lib/writeNewHtml')

// options :: Object
function WebFlight(options) {
  return new Promise((resolve, reject) => {
    const originalHtmlString = stringifyHtml(options.originalHtml)
    const filesArray = makeFilesArray(options.filesFolder)
    
    createHashObj(filesArray)
      .then(writeJs.bind(null, options.jsOutput))
      .then(replaceHtml.bind(null, originalHtmlString))
      .then(writeNewHtml.bind(null, options.htmlOutput))
      .then(resolve)
  })
}

module.exports = WebFlight