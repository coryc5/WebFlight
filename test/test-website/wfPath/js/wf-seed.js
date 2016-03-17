var http = require("http");
 var WebTorrent = require("webtorrent");
var client = new WebTorrent();

      client.seed('/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/test-website/videos/.DS_Store', function(torrent) {
        console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);
      });

      client.seed('/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/test-website/img/bird1.jpg', function(torrent) {
        console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);
      });

      client.seed('/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/test-website/img/bird2.jpg', function(torrent) {
        console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);
      });

      client.seed('/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/test-website/img/google.png', function(torrent) {
        console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);
      });

      client.seed('/Users/corycaprice/Documents/Programming/Codesmith/WebFlight/test/test-website/videos/birdVid.mp4', function(torrent) {
        console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);
      });console.log("⌛️ ", "waiting on ", 5, " seeds...");setInterval(function() {
    http.get('http://localhost:3000/count.check.4wf', function(response) {
      response.on('data', function(data) {
        console.log(data.toString())
      });
    });
  }, 60000);