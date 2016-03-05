/* global describe, it */
'use strict'

const path = require('path')
const assert = require('assert')
const stringifyHtml = require('../lib/stringifyHtml')

const testHtml =
`<!DOCTYPE>
<html>
  <body>
     <script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>
  </body>
</html>`

describe('stringifyHtml', function (done) {
  it('should read a file and return a string of the file contents', function () {
    assert.equal(testHtml, stringifyHtml(path.join(__dirname, '/replaceHtml/index.html')))
  })
})
