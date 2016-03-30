'use strict';

const path = require('path')
const chai = require('chai')
const chaifs = require('chai-fs')
const expect = chai.expect
const assert = chai.assert
chai.use(chaifs)

const writeJsUL = require('../../lib/writeJsUL')
const filesObj = require('../fixtures/filesObj.js')

// TODO: Delete existing output file before running test
const output = path.join(__dirname, '../fixtures/wfPath/js/wf-seed.js')

describe('writeJsUL', () => {
  writeJsUL(output, 'http://localhost:3000', 5, filesObj)
  it('output file should be created', () => {
    assert.isFile(output)
  })
  it('file should "client.seed" all files in obj', () => {
    expect(output).to.have.content.that.match(/client.seed/)
    expect(output).to.not.have.content.that.match(/undefined/)
  })
  it('file should contain all paths to the seeded content', () => {
    const files = Object.keys(filesObj)
    files.forEach((file) => {
      const regFile = new RegExp(filesObj[file].path, 'g')
      expect(output).to.have.content.that.match(regFile)
    })
  })
})
