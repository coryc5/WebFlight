'use strict';

import express from 'express';
import WebTorrent from 'webtorrent';
const app = express();

app.get('/', function(req, res) {
	res.sendfile('test_files/index.html');
});

app.listen(3000, function() {
	console.log('server listening on localhost:3000');
});
