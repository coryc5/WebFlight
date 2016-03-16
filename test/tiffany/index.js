/* global describe, it */
'use strict'

// Testing requirements
const path = require('path')
const chai = require('chai')
let assert = chai.assert
let expect = chai.expect
// let should = chai.should
const chaiAsPromised = require('chai-as-promised')
const chaifs = require('chai-fs')
chai.use(chaiAsPromised)
chai.use(chaifs)

// Functions being tested
const stringifyHtml = require('../../lib/stringifyHtml')
const makeFilesObj = require('../../lib/makeFilesObj')
const hashFilesObj = require('../../lib/hashFilesObj')
const writeJsDL = require('../../lib/writeJsDL')

// Testing input
const wfOptions = {
  originalHtml: path.join(__dirname, 'index.html'),
  filesFolder: path.join(__dirname, 'img'),
  filesRoute: 'img/',
  jsOutputDL: path.join(__dirname, 'webflight.js'),
  jsOutputUL: path.join(__dirname, 'wf/seedUL.js'),
  htmlOutput: path.join(__dirname, 'wf/index.html'),
  route: '/'
}

// Testing variables
const stringifiedHtml = stringifyHtml(path.join(__dirname, '../replaceHtml/index.html'))
const filesObj = makeFilesObj(wfOptions.filesFolder, wfOptions.filesRoute)
const fileNames = Object.keys(filesObj)

// Testing begins
describe('stringifyHtml', () => {
  it('output should not equal path', () => {
    assert.notEqual(wfOptions.originalHtml, stringifiedHtml)
  })
  it('should return a string', () => {
    expect(stringifiedHtml).to.be.a('string')
  })
})

describe('makeFilesObj', () => {
  it('expect output to have file names as keys', () => {
    fileNames.forEach(function (file) {
      expect(filesObj).to.have.property(file)
    })
  })
})

describe('hashFilesObj', () => {
  it('expect hashedObj to have correct keys', () => {
    const hashedObjFunc = hashFilesObj(filesObj)
    return hashedObjFunc.then(function (hashedObj) {
      for (var info in hashedObj) {
        expect(hashedObj[info]).to.have.all.keys('hash', 'magnet', 'fileOnServer')
      }
    })
  })
})

describe('writeJsDL', () => {
  // Waiting for post-promise hashed obj
  writeJsDL(wfOptions.jsOutputDL, filesObj)
  it('output (webflight.js) file is created', () => {
    assert.isFile(path.join(__dirname, 'webflight.js'))
  })
  it('file should "client.add" all files in obj', () => {
    
  })
})

// it('writeJsUL', () => {
// })

// return expect(hashedObjFunc).to.eventually.have.property('img/bird')
