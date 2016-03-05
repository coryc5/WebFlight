'use strict'

const assert = require('assert')
const fs = require('fs')
const writeJs = require('../lib/writeJs')
const makeFilesArray = require('../lib/makeFilesArray')
const createHashObj = require('../lib/createHashObj')

describe('writeJs', () => {
  it('should write js file to wf/', done => {
    const filesArray = makeFilesArray(__dirname)

    createHashObj(filesArray).then(hashObj => {
      fs.mkdir(__dirname + '/wf', err => {
        writeJs(hashObj, __dirname + '/wf/webflight.js')
        
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