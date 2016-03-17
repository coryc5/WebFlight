/* global describe, it */
'use strict'
const assert = require('assert')
const path = require('path')
const makeFilesObj = require('../lib/makeFilesObj')

// makeFilesObj
describe('makeFilesObj', function () {
  it('should return array of files in directory', function () {
    const array = makeFilesObj(path.join(__dirname + '/test-dir'), 'files/')

    assert.deepEqual({
      'files/fun.jpg': {fileOnServer: `${__dirname}/test-dir/fun.jpg`},
      'files/laughter.html': {fileOnServer: `${__dirname}/test-dir/laughter.html`},
      'files/neat.png': {fileOnServer: `${__dirname}/test-dir/neat.png`}
    }, array)
  })
  it('should work with array of directories and single route', function () {
    const filesObj = makeFilesObj([path.join(__dirname, '/wf'), path.join(__dirname, '/replaceHtml')], '/files')

    assert.deepEqual({
      'files/webtorrent-breaks-if-folder-is-empty': {fileOnServer: `${__dirname}/wf/webtorrent-breaks-if-folder-is-empty`},
      'files/t.txt': {fileOnServer: `${__dirname}/wf/t.txt`},
      'files/index.html': {fileOnServer: `${__dirname}/replaceHtml/index.html`},
      'files/index2.html': {fileOnServer: `${__dirname}/replaceHtml/index2.html`}
    }, filesObj)
  })

  it('should work with array of directories and array of routes', function () {
    const filesObj = makeFilesObj([path.join(__dirname, '/wf'), path.join(__dirname, '/replaceHtml')], ['/files', '/img'])

    assert.deepEqual({
      'files/webtorrent-breaks-if-folder-is-empty': {fileOnServer: `${__dirname}/wf/webtorrent-breaks-if-folder-is-empty`},
      'files/t.txt': {fileOnServer: `${__dirname}/wf/t.txt`},
      'files/index.html': {fileOnServer: `${__dirname}/replaceHtml/index.html`},
      'files/index2.html': {fileOnServer: `${__dirname}/replaceHtml/index2.html`},
      'img/webtorrent-breaks-if-folder-is-empty': {fileOnServer: `${__dirname}/wf/webtorrent-breaks-if-folder-is-empty`},
      'img/t.txt': {fileOnServer: `${__dirname}/wf/t.txt`},
      'img/index.html': {fileOnServer: `${__dirname}/replaceHtml/index.html`},
      'img/index2.html': {fileOnServer: `${__dirname}/replaceHtml/index2.html`}
    }, filesObj)
  })
})
