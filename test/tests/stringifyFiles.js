/* global describe, it */
'use strict'
const opts1 = require('../fixtures/opts').opts1
const stringifyFiles = require('../../lib/stringifyFiles')
const chai = require('chai')
let expect = chai.expect

describe('stringifyFiles', () => {
  it('should output an array', () => {
    let output = stringifyFiles([opts1.routes['/'], opts1.routes['/how.html']])
    expect(output).to.be.an('array')
  })
  it('should output an array of strings', () => {
    let output = stringifyFiles([opts1.routes['/'], opts1.routes['/how.html']])
    expect(output[0]).to.be.an('string')
  })
})

