var assert = require('assert')
var fs = require('fs')
var writeNewHtml = require('./../writeNewHtml')

describe('writeNewHtml', () => {
  it('should write html file to wf/',done => {
    var html = `<!DOCTYPE>
<html>
  <body>
     <script class="923ad49f0ca1962716d34bd60433de8a207570f7"></script>
  </body>
</html>`

    fs.mkdir(__dirname + '/wf', err => {
      writeNewHtml(html, 'test/wf/index');
      var wroteHtml = fs.statSync(__dirname + '/wf/index.html').isFile()
      fs.unlink(__dirname + '/wf/index.html', err => {
        fs.rmdir(__dirname + '/wf', err => {
          assert.equal(true, wroteHtml)
          done()
        })
      })
    })
  })
})