/* global describe, it */
'use strict'
const assert = require('assert')
const path = require('path')
const makeArrayOfContents = require('../lib/makeArrayOfContents')
const htmlToString = require('../lib/htmlToString')

const testHtml = '<!DOCTYPE><html><body><script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script></body></html>'

// makeArrayOfContents
describe('makeArrayOfContents', function () {
  it('should return array of files in directory', function () {
    assert.equal(['fun.jpg', 'laughter.html', 'neat.png'],
    makeArrayOfContents(path.join(__dirname + '/test-dir')))
  })
})

describe('htmlToString', function (done) {
  it('should read a file and return a string of the file contents', function () {
    assert.equal(testHtml, htmlToString(path.join(__dirname, '/replaceHtml/index.html')))
  })
})
