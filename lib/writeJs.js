'use strict'

const fs = require('fs')

function writeJs(output, filesObj) {
  return new Promise((resolve, reject) => {
    const hashesArray = Object.keys(filesObj).map(files => {
      return filesObj[files].hash
    })
    let jsString = 'var client = new WebTorrent();'
    
    hashesArray.forEach(hash => {
      jsString += `
      
      client.add('${hash}', function(torrent) {
        var file = torrent.files[0];
        var elementsArray = document.getElementsByClassName('.${hash}');
        
        elementsArray.forEach(function(element) {
          file.renderTo(element)
        });
      });`
    })
    
    fs.writeFileSync(output, jsString, 'utf8')
    resolve(filesObj)
  })
}

module.exports = writeJs