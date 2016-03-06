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
      'files/fun.jpg': { fileOnServer: `${__dirname}/test-dir/fun.jpg`}, 
      'files/laughter.html': { fileOnServer: `${__dirname}/test-dir/laughter.html`}, 
      'files/neat.png': { fileOnServer: `${__dirname}/test-dir/neat.png`}
    }, array)
  })
})
