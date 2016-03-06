'use strict'

const fs = require('fs')
const assert = require('assert')
const writeJs = require('../lib/writeJs')
const makeFilesObj = require('../lib/makeFilesObj')
const hashFilesObj = require('../lib/hashFilesObj')

describe('writeJs', () => {
  it('should write js file to wf/', done => {
    const filesObj = makeFilesObj(__dirname, 'files/')

    hashFilesObj(filesObj).then(hashObj => {
      writeJs(__dirname + '/writeJs/webflight.js', hashObj).then(result => {
        const wroteJs = fs.statSync(__dirname + '/writeJs/webflight.js').isFile()
        
        fs.unlink(__dirname + '/writeJs/webflight.js', err => {
          assert.equal(wroteJs, true)
          done()
        })
      })
    }) 
  })
})