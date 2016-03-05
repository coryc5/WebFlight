/* global describe, it */
'use strict'
const assert = require('assert')
const path = require('path')
const makeArrayOfContents = require('../lib/makeArrayOfContents')

// makeArrayOfContents
describe('makeArrayOfContents', function () {
  it('should return array of files in directory', function () {
    assert.equal(['fun.jpg', 'laughter.html', 'neat.png'],
    makeArrayOfContents(path.join(__dirname + '/test-dir')))
  })
})
