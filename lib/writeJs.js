'use strict'

const fs = require('fs')

function writeJs(hashObj, output) {
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
  
  return hashObj
}

module.exports = writeJs