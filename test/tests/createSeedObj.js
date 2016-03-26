/* global describe, it */

'use strict'

const chai = require('chai')
const assert = chai.assert

const createSeedObj = require('../../lib/createSeedObj')

const htmlStrings = require('../fixtures/htmlStrings')
const filesObj = require('../fixtures/filesObj')
const sampleSeedObj = require('../fixtures/seedObj')

const seedObj = createSeedObj(htmlStrings, filesObj)
const keys = Object.keys(seedObj)

describe('createSeedObj', () => {
  it('should return an object', () => {
    assert.equal(seedObj.constructor, Object)
  })

  it('object should have as many keys as htmlStrings supplied', () => {
    assert.equal(keys.length, htmlStrings.length)
  })

  it('each key should have a paths and srcs property', () => {
    const keyTest = keys.every((key) => {
      return seedObj[key].hasOwnProperty('paths') && seedObj[key].hasOwnProperty('srcs')
    })

    assert.equal(keyTest, true)
  })

  it('should return the expected object', () => {
    assert.deepEqual(seedObj, sampleSeedObj)
  })
})
