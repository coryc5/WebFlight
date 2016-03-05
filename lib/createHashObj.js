'use strict'

const createTorrent = require('create-torrent')
const parseTorrent = require('parse-torrent')

function createHashObj(filesArray) {
  return new Promise((resolve, reject) => {
    let hashObj = {}
    
    hashFile(filesArray)
    
    function hashFile(array) {
      const file = array.pop()
      
      createTorrent(file, (err, torrent) => {
          if (err) {
            reject(err)
            throw err
          }
          
        hashObj[file] = parseTorrent(torrent).infoHash
        
          if (array.length) {
            hashFile(array)
          } else {
            resolve(hashObj)
          }
      })
    }
  })
}

// createHashObj([ '/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/createHashObj/images/Hot-Tea.jpg',
//   '/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/createHashObj/images/hello.js',
//   '/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/createHashObj/images/pizza.png' ]).then(console.log)

module.exports = createHashObj