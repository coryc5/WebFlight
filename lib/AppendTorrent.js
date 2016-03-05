'use strict';

module.exports = AppendTorrent;

const WebTorrent = require('webtorrent');
const $ = require('jquery');

/**
 * @param (Object) hashObj
 */

// Takes in object containing hash values, downloads torrent via hash, appends downloaded image to its correct location on the page

function AppendTorrent(hashObj) {
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
