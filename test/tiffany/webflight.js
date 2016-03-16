$(document).ready(function() {
var client = new WebTorrent();

      client.add('undefined', function(torrent) {
        var file = torrent.files[0];
        var elementsArray = [].slice.call(document.getElementsByClassName('undefined'));

        if (elementsArray.length) {
          elementsArray.forEach(function(element) {
            file.renderTo(element)
          });
        }
      });

      client.add('undefined', function(torrent) {
        var file = torrent.files[0];
        var elementsArray = [].slice.call(document.getElementsByClassName('undefined'));

        if (elementsArray.length) {
          elementsArray.forEach(function(element) {
            file.renderTo(element)
          });
        }
      });

      client.add('undefined', function(torrent) {
        var file = torrent.files[0];
        var elementsArray = [].slice.call(document.getElementsByClassName('undefined'));

        if (elementsArray.length) {
          elementsArray.forEach(function(element) {
            file.renderTo(element)
          });
        }
      });});