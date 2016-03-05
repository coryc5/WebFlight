// var jquery = phantom.injectJs('../node_modules/jquery/dist/jquery.min.js');
// var webtorrent = phantom.injectJs('../node_modules/webtorrent/webtorrent.min.js');
// // var torrent = phantom.injectJs('../AppendTorrent.js');
// var append = phantom.injectJs('temp.js');
// console.log('jquery: ', jquery);
// console.log('webtorrent: ', webtorrent);
// // console.log('code: ', torrent);
// console.log('injection code: ', append);

casper.options.viewportSize = {width: 700, height: 600};

casper.test.begin('AppendTorrent.js test begins', 3, function suite(test) {

	casper.start('forcedTest.html', function() {
		test.assertTitle('Append Torrent Test', 'page title detected');
		this.capture('page.png');
	})

	.then(function() {
		test.assertExists('img[class="12fe35278c2be494f28ae6902e4a01f40e4e273e"]', "hashed class exists");
	})

	.then(function() {
		// casper.wait(5000, function() {
		// 	this.echo('Waited 5 seconds for torrent');
		// 	test.assertResourceExists('blob:null/7db7115e-a34e-40e2-aca2-0a4b2970e424');
		// });

		var logoIsVisible = casper.evaluate(function() {
			return __utils__.visible('img');
		});

		this.echo(logoIsVisible);
	})

	.run(function() {
		test.done();
	});

});
