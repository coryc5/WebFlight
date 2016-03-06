'use strict'

const fs = require('fs')

function writeNewHtml (fileName, htmlString) {
  return new Promise((resolve, reject) => {
    fs.writeFileSync(fileName, htmlString, 'utf8')
    resolve()
  })
}

module.exports = writeNewHtml
