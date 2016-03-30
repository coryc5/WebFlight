/* global describe, it */

'use strict'

const chai = require('chai')
const assert = chai.assert

const hashSeedObj = require('../../lib/hashSeedObj')

const sampleSeedObj = require('../fixtures/seedObj')
const sampleHashObj = require('../fixtures/hashObj')

const hashObj = hashSeedObj(sampleSeedObj)

describe('hashSeedObj', () => {
  it('should return an object', (done) => {
    hashObj.then((data) => {
      try {
        assert.equal(data.constructor, Object)
        done()
      } catch (error) {
        done(error)
      }
    })
  })

  it('object should have as many keys as original supplied seedObj', (done) => {
    hashObj.then((data) => {
      const keys = Object.keys(data)

      try {
        assert.equal(keys.length, Object.keys(sampleSeedObj).length)
        done()
      } catch (error) {
        done(error)
      }
    })
  })

  it('each key should have a paths and srcs property', (done) => {
    hashObj.then((data) => {
      const keys = Object.keys(data)
      const keyTest = keys.every((key) => {
        return data[key].hasOwnProperty('paths') && data[key].hasOwnProperty('srcs')
      })

      try {
        assert.equal(keyTest, true)
        done()
      } catch (error) {
        done(error)
      }
    })
  })

  it('each key should have a hash and magnet property', (done) => {
    hashObj.then((data) => {
      const keys = Object.keys(data)
      const keyTest = keys.every((key) => {
        return data[key].hasOwnProperty('hash') && data[key].hasOwnProperty('magnet')
      })

      try {
        assert.equal(keyTest, true)
        done()
      } catch (error) {
        done(error)
      }
    })
  })

  it('hash and magnet properties should be strings', (done) => {
    hashObj.then((data) => {
      const keys = Object.keys(data)
      const stringTest = keys.every((key) => {
        return data[key].hash.constructor === String && data[key].magnet.constructor === String
      })

      try {
        assert.equal(stringTest, true)
        done()
      } catch (error) {
        done(error)
      }
    })
  })

  it('returns expected hashObj', (done) => {
    hashObj.then((data) => {
      try {
        assert.deepEqual(data, sampleHashObj)
        done()
      } catch (error) {
        done(error)
      }
    })
  })
})
