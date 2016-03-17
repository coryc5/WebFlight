'use strict'
const fs = require('fs')
const path = require('path')

/**
 * @param {string} | {array} dir - absolute path to directory (or directories) containing content to be seeded
 * @param {string} | {array} route - represents route (or routes) on the site that will have seeded content
 */
function makeFilesObj (dir, route) {
  if (!dir)

  if (route.startsWith('/')) route = route.slice(1)
  if (!route.endsWith('/')) route += '/'

  const filesArray = fs.readdirSync(dir)
  const filesObj = {}

  filesArray.forEach((file) => {
    filesObj[route + file] = {
      // Question: How will dir resolve and will I be able to use this path to find the file?
      fileOnServer: `${dir}/${file}`
    }
  })

  return filesObj
}

module.exports = makeFilesObj
