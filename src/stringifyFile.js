'use strict'
const fs = require('fs')

/**
 * @param {string} file
 */
function htmlToString (file) {
  return fs.readFileSync(file, 'utf8')
}

module.exports = htmlToString
