/* globals describe, it */

const fs = require('fs')
const path = require('path')

const chai = require('chai')
const assert = chai.assert

const writeSeedScript = require('../../lib/writeSeedScript')

const output = path.join(__dirname, '..', 'fixtures/seedscript.js')
const url = 'http://google.com'
const stopCount = 10
const seedObj = require('../fixtures/seedObj.js')
const n = Object.keys(seedObj).length

describe('writeSeedScript', () => {
  it('should create an output file', () => {
    writeSeedScript(output, url, stopCount, seedObj)
    const fileExists = fs.statSync(output).isFile()

    assert.equal(fileExists, true)
    fs.unlinkSync(output)
  })

  it('should have n seeds', () => {
    writeSeedScript(output, url, stopCount, seedObj)
    const file = fs.readFileSync(output)
    const nTest = file.includes(`var totalSeeds = ${n}`)

    assert.equal(nTest, true)
    fs.unlinkSync(output)
  })
})
