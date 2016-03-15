/* global describe, it */
'use strict'

const path = require('path')
const chai = require('chai')
let assert = chai.assert
let expect = chai.expect
let should = chai.should
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const stringifyHtml = require('../../lib/stringifyHtml')
const makeFilesObj = require('../../lib/makeFilesObj')
const hashFilesObj = require('../../lib/hashFilesObj')

const wfOptions = {
  originalHtml: path.join(__dirname, 'index.html'),
  filesFolder: path.join(__dirname, 'img'),
  filesRoute: 'img/',
  jsOutputDL: path.join(__dirname, 'webflight.js'),
  jsOutputUL: path.join(__dirname, 'wf/seedUL.js'),
  htmlOutput: path.join(__dirname, 'wf/index.html'),
  route: '/'
}

const testHtml =
`<!DOCTYPE>
<html>
  <body>
     <script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>
  </body>
</html>`

// const filesObj = { 'img/bird1.jpg': { fileOnServer: '/Users/Baoyee/Codesmith/WebFlight/test/tiffany/img/bird1.jpg' },
//   'img/bird2.jpg': { fileOnServer: '/Users/Baoyee/Codesmith/WebFlight/test/tiffany/img/bird2.jpg' },
// 'img/bird3.jpg': { fileOnServer: '/Users/Baoyee/Codesmith/WebFlight/test/tiffany/img/bird3.jpg' } }

describe('index.js functions test', () => {
  let filesObj = makeFilesObj(wfOptions.filesFolder, wfOptions.filesRoute)
  let fileNames = Object.keys(filesObj)

  it('stringifyHtml: should read a file and return a string of the file contents', function () {
    assert.equal(testHtml, stringifyHtml(path.join(__dirname, '../replaceHtml/index.html')))
  })

  it('makeFilesObj: expect output to have file names as keys', () => {
    fileNames.forEach(function (file) {
      expect(filesObj).to.have.property(file)
    })
  })

  it('hashFilesObj: expect hashedObj to have correct keys', () => {
    let hashedObjFunc = hashFilesObj(filesObj)
    return hashedObjFunc.then(function (hashedObj) {
      for (var info in hashedObj) {
        expect(hashedObj[info]).to.have.all.keys('hash', 'magnet', 'fileOnServer')
      }
    })
  })

  it('writeJsDL', () => {

  })

  it('writeJsUL', () => {

  })
})


// return expect(hashedObjFunc).to.eventually.have.property('img/bird')
