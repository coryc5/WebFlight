'use strict'

const cheerio = require('cheerio')

function replaceHtml(htmlString, hashObject) {
  const filesArray = Object.keys(hashObject)
  const $ = cheerio.load(htmlString)
  
  function replaceSrc(file) {
    let $elemArray = $(`[src="${file}"]`)
    
    $elemArray.each((index, elem) => {
      $(elem).removeAttr('src')
      $(elem).addClass(hashObject[file])
    })
    
    $elemArray = $(`[src='${file}']`)
    
    $elemArray.each((index, elem) => {
      $(elem).removeAttr('src')
      $(elem).addClass(hashObject[file])
    })
  }
  
  filesArray.forEach(replaceSrc)
  
  return $.html()  
}

module.exports = replaceHtml