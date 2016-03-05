'use strict'

const fs = require('fs')
const assert = require('assert')
const writeJs = require('../lib/writeJs')
const makeFilesObj = require('../lib/makeFilesObj')
const createHashObj = require('../lib/createHashObj')

describe('writeJs', () => {
  it('should write js file to wf/', done => {
    const filesArray = makeFilesObj(__dirname)

    createHashObj(filesArray).then(hashObj => {
      fs.mkdir(__dirname + '/wf', err => {
        writeJs(hashObj, __dirname + '/wf/webflight.js').then(result => {
          const wroteJs = fs.statSync(__dirname + '/wf/webflight.js').isFile()
          
          fs.unlink(__dirname + '/wf/webflight.js', err => {
            fs.rmdir(__dirname + '/wf', err => {
              assert.equal(wroteJs, true)
              done()
            })
          })
        })
      })
    }) 
  })
})