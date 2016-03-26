const options = require('../fixtures/opts').opts4
const stringifyFiles = require('../../lib/stringifyFiles')

const stringifiedFiles = stringifyFiles(options.assetsPath)
console.log(options)

describe('stringifyFiles', () => {
  it('output should not equal path', () => {
    assert.notEqual(wfOptions.originalHtml, stringifiedHtml)
  })
  it('should return an array of length 1 string if single input', () => {
    expect(stringifiedHtml).to.be.a('string')
  })
  it('should return an array if multiple inputs', () => {
    // expect(stringifiedHtmlArr).to.be.a('array')
  })
})
