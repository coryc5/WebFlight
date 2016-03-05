/* global describe, it */
const assert = require('assert')
const makeArrayOfContents = require('../makeArrayOfContents')

// makeArrayOfContents
describe('makeArrayOfContents', function () {
  it('should return array of files in directory', function () {
    assert.equal(['fun.jpg', 'laughter.html', 'neat.png'], makeArrayOfContents('test/test-dir'))
  })
})
