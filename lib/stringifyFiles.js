'use strict'

const fs = require('fs')

/**
 * @param {array} filesArray - array of files from route options
 */
function stringifyFiles (filesArray) {
  return filesArray.map((file) => fs.readFileSync(file, 'utf8'))
}

module.exports = stringifyFiles
