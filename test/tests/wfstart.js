/* global describe, it */
'use strict'
const path = require('path')
const cheerio = require('cheerio')
const chai = require('chai')
let assert = chai.assert
let expect = chai.expect

const chaifs = require('chai-fs')
// chai.use(chaiAsPromised)
chai.use(chaifs)

// Functions being tested
const stringifyHtml = require('../../lib/stringifyHtmlFiles')
const createFilesObj = require('../../lib/createFilesObj')
const hashFilesObj = require('../../lib/hashFilesObj')
const writeJsDL = require('../../lib/writeJsDL')
const writeJsUL = require('../../lib/writeJsUL')
const replaceHtml = require('../../lib/replaceHtml')

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
const stringifiedHtml = stringifyHtml(path.join(__dirname, 'index.html'))
// const stringifiedHtmlArr = stringifyHtml([path.join(__dirname, 'index.html'), path.join(__dirname, 'about.html')])
const filesObj = createFilesObj(wfOptions.filesFolder, wfOptions.filesRoute)
const hashedObjFunc = hashFilesObj(filesObj)

// Testing begins
describe('stringifyHtml', () => {
  it('output should not equal path', () => {
    assert.notEqual(wfOptions.originalHtml, stringifiedHtml)
  })
  it('should return a string if single input', () => {
    expect(stringifiedHtml).to.be.a('string')
  })
  it('should return an array if multiple inputs', () => {
    // expect(stringifiedHtmlArr).to.be.a('array')
  })
})






// check if option is undefined
describe('writeJsUL', () => {
  const ULFile = wfOptions.jsOutputUL
  const ULFileString = stringifyHtml(ULFile)
  it('output (wf/seedUL.js) is created', () => {
    return hashedObjFunc.then((hashedObj) => {
      writeJsUL(ULFile, hashedObj)
      assert.isFile(ULFile)
    })
  })
  it('file should "client.seed" all files in obj', () => {
    expect(ULFileString).to.include('client.seed')
    expect(ULFileString).to.not.include('undefined')
  })
  it('file should contain correct file paths to seed', () => {
    return hashedObjFunc.then((hashedObj) => {
      for (let file in hashedObj) {
        expect(ULFileString).to.include(hashedObj[file].fileOnServer)
      }
    })
  })
})

describe('replaceHtml', () => {
  it('WebTorrent and WebFlight scripts should be appended to page', () => {
    return hashedObjFunc.then((hashedObj) => {
      let replacedString = replaceHtml(stringifiedHtml, wfOptions.htmlOutput, hashedObj)
      expect(replacedString).to.include('webtorrent.min.js')
      // expect(replacedString).to.include('webflight.js')
      expect(replacedString).to.not.include('undefined')
    })
  })
  it('content with hash classes should not contain source attributes', () => {
    return hashedObjFunc.then((hashedObj) => {
      let replacedString = replaceHtml(stringifiedHtml, wfOptions.htmlOutput, hashedObj)
      const $ = cheerio.load(replacedString)
      const bird1Tag = $(`.${hashedObj['img/bird1.jpg'].hash}`).attr('src')
      const bird2Tag = $(`.${hashedObj['img/bird2.jpg'].hash}`).attr('src')
      expect(bird1Tag).to.be.an('undefined')
      expect(bird2Tag).to.be.an('undefined')
    })
  })
  it('html should contain all file hashes as class names', () => {
    return hashedObjFunc.then((hashedObj) => {
      let replacedString = replaceHtml(stringifiedHtml, wfOptions.htmlOutput, hashedObj)
      expect(replacedString).to.include(hashedObj['img/bird1.jpg'].hash)
      expect(replacedString).to.include(hashedObj['img/bird2.jpg'].hash)
    })
  })
})
