/* globals describe, it */

var fs = require('fs')
var assert = require('assert')
var replaceHtml = require('../lib/replaceHtml')

var html = fs.readFileSync(__dirname + '/replaceHtml/index.html', 'utf8')
var replacedHtml = fs.readFileSync(__dirname + '/replaceHtml/index2.html', 'utf8')
var filesObj = { 
  'https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js':
  { 
    fileOnServer:'https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js',
    hash: '923ad49f0ca1962716d34bd60433de8a207570f7'
  }
}

describe('replaceHtml', function() {
  it('should replace src attribute with class attribute', function(done) {
    replaceHtml(html, filesObj).then(results => {
      assert.equal(replacedHtml, results)
      done()
    })
  })
})
