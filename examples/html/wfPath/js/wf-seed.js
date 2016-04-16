var http = require('http');
var WebTorrent = require('webtorrent');
var client = new WebTorrent(); 
var totalSeeds = 1

client.seed(['/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/01.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/02.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/03.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/04.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/05.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/06.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/07.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/08.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/09.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/10.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/11.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/12.jpg','/Users/corycaprice/Documents/Programming/WebFlight/examples/html/imgs/13.jpg'], function(torrent) {
  --totalSeeds;

  console.log('🐣 ', torrent.files.map((file) => file.name).slice(0,3).join(', '), 'etc., now seeding at hash ', torrent.infoHash);

  if (!totalSeeds) console.log('🕊 all seeds active')
});

console.log('⌛️ ', 'waiting on ', totalSeeds, ' seeds...');
setInterval(function() {
  http.get('http://localhost:9988//count.check.4wf', function(response) {
    response.on('data', function(data) {
      data = JSON.parse(data);

      if (data.count < 5) {
        console.log('😴 bots going offline')
        http.get('http://localhost:9988//bots.no.longer.seeding.4wf')
        require('remote').require('app').quit()
      }
    });
  });
}, 600000);

