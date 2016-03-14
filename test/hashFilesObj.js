/* global describe, it */
'use strict'

const assert = require('assert')
const path = require('path')
const makeFilesObj = require('../lib/makeFilesObj')
const hashFilesObj = require('../lib/hashFilesObj')

// hashFilesObj
describe('hashFilesObj', function () {
  it('should return hash object of hashFilesObj/images folder', function (done) {
    const filesObj = makeFilesObj(path.join(__dirname + '/hashFilesObj/images'), 'images/')
    const correctObj = {
                        'images/Hot-Tea.jpg': 
                        { 
                          fileOnServer: '/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/hashFilesObj/images/Hot-Tea.jpg',
                          hash: 'ab1529688e340a855ec85a3d3b5dbf5ec1ea8707' 
                        },
                        'images/hello.js':
                        {
                          fileOnServer: '/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/hashFilesObj/images/hello.js',
                          hash: '73a46bb0b8a987dc0c349beaa5a46ef3e6caca82' 
                        },
                        'images/pizza.png':
                        { 
                          fileOnServer: '/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/hashFilesObj/images/pizza.png',
                          hash: 'a677a24c58e0709eb56e36e9732bda1d589b4fbc' 
                        } 
                      }
    
    hashFilesObj(filesObj).then(results => {
      assert.deepEqual(results, correctObj)
      done()
    })
  })
})
