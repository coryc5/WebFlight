'use strict'
const fs = require('fs')

/**
 * @param {string} dir
 */
function makeFilesArray (dir) {
  let filesArray = fs.readdirSync(dir)
  
  filesArray.forEach((file, index, array) => {
    array[index] = `${dir}/${file}`
  })
  
  return filesArray
}

module.exports = makeFilesArray
