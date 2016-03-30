// TODO: Figure out how to get direct path to file (e.g. file:///Usr/...) || Look into SpookyJS for Casper with Node

// NOTE: To run test, input path that matches: 'file://' + path.join(__dirname, '../../fixtures/html/dropdown.html')

casper.test.begin('addStatusBar Unit Test', 1, function suite (test) {
  casper.start('', function () {
    test.assertExists('div[id="webflight-loading-ui"]', 'Widget detected')
  })
  .run(function () {
    test.done()
  })
})
