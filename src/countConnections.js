'use strict'
const net = require('net')

// Represents # of connections; call() or kill() spawns based on connection count
const hotZone = 5
const warmZone = 4
const coolZone = 3

const server = net.createServer((connect) => {
  connect.on('end', () => {
    console.log('disconnected')
  })

  // count connections and dispatch controllers according to number of connections
  server.getConnections((err, count) => {
    if (err) console.error(err)

    if (count >= hotZone) console.log('redirect to spawn-seeding route') // redirect to only seeding
    if (count <= coolZone) console.log('kill() spawns') // kill bots
    if (count > hotZone && count >= warmZone) console.log('call() spawns') // ready bots
  })

  connect.write('robots are waitiing')
  connect.pipe(connect)
})

server.listen(3000)
