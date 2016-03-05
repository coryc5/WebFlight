/* global describe, it */
'use strict'
const assert = require('assert')
const path = require('path')
const makeFilesArray = require('../lib/makeFilesArray')

// makeFilesArray
describe('makeFilesArray', function () {
  it('should return array of files in directory', function () {
    const array = makeFilesArray(path.join(__dirname + '/test-dir'))
    assert.deepEqual([`${__dirname}/test-dir/fun.jpg`, `${__dirname}/test-dir/laughter.html`, `${__dirname}/test-dir/neat.png`], array)
  })
})
