'use strict'

const fs = require('fs')

function writeJs(output, hashObj) {
  return new Promise((resolve, reject) => {
    const filesArray = Object.keys(hashObj)
    let jsString = 'var client = new WebTorrent();'
    
    filesArray.forEach(file => {
      const hash = hashObj[file]
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
    resolve(hashObj)
  })
}

module.exports = writeJs