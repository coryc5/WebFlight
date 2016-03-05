'use strict'

const fs = require('fs')

function writeNewHtml (htmlString, fileName) {
  fs.writeFileSync(`${__dirname}/${fileName}.html`, htmlString, 'utf8')
}

module.exports = writeNewHtml
