'use strict'

const path = require('path')
const cheerio = require('cheerio')

function replaceHtml (htmlStringsArray, htmlFilesArray, filesObj) {
  const filesArray = Object.keys(filesObj)
  return htmlStringsArray.map((htmlString, index) => {
    const $ = cheerio.load(htmlString)
    const scriptName = 'wf-' + path.basename(htmlFilesArray[index])

    filesArray.forEach(replaceSrc)

    function replaceSrc (file) {
      let $elemArray = $(`[src="${file}"]`)

      $elemArray.each((index, elem) => {
        $(elem).removeAttr('src')
        $(elem).addClass(filesObj[file].hash)
      })

      $elemArray = $(`[src='${file}']`)

      $elemArray.each((index, elem) => {
        $(elem).removeAttr('src')
        $(elem).addClass(filesObj[file].hash)
      })
    }

    $('body').append('<script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>')
    $('body').append(`<script src="${scriptName}"></script>`)

    return $.html()
  })
}

module.exports = replaceHtml
