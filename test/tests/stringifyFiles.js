/* global describe, it */

const opts1 = require('../fixtures/opts').opts1
const stringifyFiles = require('../../lib/stringifyFiles')
const chai = require('chai')
let assert = chai.assert
let expect = chai.expect

describe('stringifyFiles', () => {
  it('output should not equal path', () => {
    assert.notEqual(wfOptions.originalHtml, stringifiedHtml)
  })
  it('should return an array of length 1 string if single input', () => {
    expect(stringifiedHtml).to.be.a('string')
  })
  it('should return an array if multiple inputs', () => {
    // expect(stringifiedHtmlArr).to.be.a('array')
  })
})

