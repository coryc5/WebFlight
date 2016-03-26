const fs = require('fs')
const path = require('path')

const htmlStrings = [fs.readFileSync(path.join(__dirname, 'html/logos.html'))]

module.exports = htmlStrings
