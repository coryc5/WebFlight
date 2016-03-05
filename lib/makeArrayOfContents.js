'use strict'
const fs = require('fs')

/**
 * @param {string} dir
 */
function makeArrayOfContents (dir) {
  return fs.readdirSync(dir)
}

module.exports = makeArrayOfContents
