'use strict'

const fs = require('fs')
const path = require('path')

/**
 * @param {string} | {array} dir - absolute path(s) containing content to be seeded
 * @param {string} | {array} route - route(s) on the site that will have seeded content
 */

function createFilesObj (dir, routes) {
  // TODO: handle edge cases, make errors
  if (dir.constructor === String) dir = [dir]

  const filesObj = {}
  let filesArray = []

  dir.forEach((folder) => {
    // TODO: refactor for fs.readdir
    const files = fs.readdirSync(folder)

    filesArray = filesArray.concat(files.map((file) => `${folder}/${file}`))
  })

  const routesArr = routes.map((route) => {
    // each route in array should conform to the pattern in provided options object
    if (!route.endsWith('/')) route += '/'

    return route
  })

  routesArr.forEach((route) => {
    filesArray.forEach((file) => {
      filesObj[route + path.basename(file)] = {
        path: `${file}`
      }
    })
  })

  return filesObj
}

module.exports = createFilesObj
