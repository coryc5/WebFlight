'use strict'

const fs = require('fs')

function writeJsUL (output, url, filesObj) {
  const filesArray = Object.keys(filesObj).map((files) => {
    return filesObj[files].fileOnServer
  })

  let totalSeeds = 0
  let jsString = 'var http = require("http");\n var WebTorrent = require("webtorrent");\n' + 'var client = new WebTorrent();'

  filesArray.forEach((file) => {
    if (!jsString.includes(file)) {
      totalSeeds++
      jsString += `

      client.seed('${file}', function(torrent) {
        console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);
      });`
    }
  })

  jsString += `console.log("⌛️ ", "waiting on ", ${totalSeeds}, " seeds...");`
  jsString += `setInterval(function() {
    http.get('${url}/count.check.4wf', function(response) {
      response.on('data', function(data) {
        console.log(data.toString())
      });
    });
  }, 60000);`


  fs.writeFileSync(output, jsString, 'utf8')

  return filesObj
}

module.exports = writeJsUL
