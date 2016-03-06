'use strict'

const createTorrent = require('create-torrent')
const parseTorrent = require('parse-torrent')

function hashFilesObj(filesObj) {
  return new Promise((resolve, reject) => {
    const hashObj = filesObj
    const filesArray = Object.keys(filesObj)
    const filesSrcArray = Object.keys(filesObj).map(file => {
      return filesObj[file].fileOnServer
    })
    
    hashFile(filesSrcArray)
    
    function hashFile(array) {
      const fileSrc = array.pop()
      const file = filesArray.pop()
            
      createTorrent(fileSrc, (err, torrent) => {
          if (err) {
            reject(err)
            throw err
          }

        hashObj[file].hash = parseTorrent(torrent).infoHash
        
          if (array.length) {
            hashFile(array)
          } else {
            resolve(hashObj)
          }
      })
    }
  })
}

module.exports = hashFilesObj