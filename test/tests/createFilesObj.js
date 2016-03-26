/*globals describe, it */

'use strict'

const fs = require('fs')
const path = require('path')
const chai = require('chai')
const assert = chai.assert

const createFilesObj = require('../../lib/createFilesObj')
const sampleFilesObj = require('../fixtures/filesObj')
const filesObj = createFilesObj([path.join(__dirname, '../fixtures/imgs')], ['imgs/'])
const keys = Object.keys(filesObj)

describe('createFilesObj', () => {
  it('should return an object', () => {
    assert.equal(filesObj.constructor, Object)
  })

  it('should handle directory being a string', () => {
    assert.equal(createFilesObj(path.join(__dirname, '../fixtures/imgs'), ['imgs/']).constructor, Object)
  })

  it('should return an object with n (files * routes) keys', () => {
    const files = fs.readdirSync(path.join(__dirname, '../fixtures/imgs')).length
    const routes = ['imgs/'].length
    const n = files * routes

    assert.equal(keys.length, n)
  })

  it('every key should be an object', () => {
    const keyTest = keys.every((key) => filesObj[key].constructor === Object)

    assert.equal(keyTest, true)
  })

  it('every key object should have a path property', () => {
    const pathTest = keys.every((key) => filesObj[key].hasOwnProperty('path'))

    assert.equal(pathTest, true)
  })

  it('should return the expected object', () => {
    assert.deepEqual(filesObj, sampleFilesObj)
  })
})
