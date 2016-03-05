casper.test.begin('Append Test', 1, function suite(test) {
	casper.start('http://localhost:3000', function() {
		test.assertTitle("Test", "Test");
	})

	.then(function() {
		// Waiting for selector is probably not necessary.
		casper.waitForSelector('#Packagejson', function() {
			// Test for the package.json editor instance
			test.assertExists('div[id="Packagejson"]', "package.json editor detected");
			// Test for the specific package.json text
			test.assertSelectorHasText('#Packagejson', packagejson, 'Package.json text found');
		});
	})

	.run(function() {
		test.done();
	});

});
