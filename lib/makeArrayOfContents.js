'use strict'
const fs = require('fs')
const path = require('path')

/**
 * @param {string} dir
 */
function makeArrayOfContents (dir) {
  return fs.readdirSync(path.join(__dirname, dir), (err, files) => {
    if (err) console.error(err)
    return files
  })
}

module.exports = makeArrayOfContents
