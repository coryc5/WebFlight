/* global describe, it */
'use strict'

const assert = require('assert')
const path = require('path')
const makeFilesObj = require('../lib/makeFilesObj')
const createHashObj = require('../lib/createHashObj')

// createHashObj
describe('createHashObj', function () {
  it('should return hash object of createHashObj/images folder', function (done) {
    const filesArray = makeFilesObj(path.join(__dirname + '/createHashObj/images'))
    const correctObj = {}
    const file1 = `${__dirname}/createHashObj/images/pizza.png`
    const file2 = `${__dirname}/createHashObj/images/hello.js`
    const file3 = `${__dirname}/createHashObj/images/Hot-Tea.jpg`
    
    correctObj[file1] = 'a677a24c58e0709eb56e36e9732bda1d589b4fbc'
    correctObj[file2] = '73a46bb0b8a987dc0c349beaa5a46ef3e6caca82'
    correctObj[file3] = 'ab1529688e340a855ec85a3d3b5dbf5ec1ea8707' 
    
    
    createHashObj(filesArray).then(results => {
      assert.deepEqual(results, correctObj)
      done()
    })
  })
})