var testObj = {
	'symbol.jpg': 'b9ee8a5d3156850f922dc9f2e2f581b813832ef5'
};

function AppendTorrent (hashObj) {
	for (var key in hashObj) {
		const client = new WebTorrent();
		client.add(hashObj[key], (torrent) => {
			const file = torrent.files[0];
			file.getBlobURL((err, url) => {
				if (err) throw err;
				$(`.${hashObj[key]}`).attr("src", url);
			});
		});
	}
}

torrent(testObj);
