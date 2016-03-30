const chai = require('chai')
const expect = chai.expect

const fs = require('fs')
const path = require('path')

const htmlStrings = require('../../fixtures/htmlStrings.js')
const seedObj = require('../../fixtures/seedObj.js')
const addStatusBar = require('../../../lib/addStatusBar')
const infoArr = [htmlStrings, seedObj]
const dropdown = addStatusBar(infoArr)

fs.writeFileSync(path.join(__dirname, '../../fixtures/html/dropdown.html'), dropdown, 'utf8')

describe('addStatusBar', () => {
  it('file to test in casperjs was created', () => {
    const newFile = fs.readFileSync(path.join(__dirname, '../../fixtures/html/dropdown.html'))
    expect(newFile).to.not.equal('undefined')
  })
})
