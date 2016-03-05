'use strict'

const createTorrent = require('create-torrent')
const parseTorrent = require('parse-torrent')

function createHashObj(filesArray, cb) {
  let hashObj = {}
  
  hashFile(filesArray)
  
  function hashFile(array) {
    const file = array.pop()
    
    createTorrent(file, (err, torrent) => {
        if (err) throw err
        
      hashObj[file] = parseTorrent(torrent).infoHash
      
        if (array.length) {
          hashFile(array)
        } else {
          cb(hashObj)
        }
    })
  }
}

module.exports = createHashObj