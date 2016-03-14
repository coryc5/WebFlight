'use strict'

// 'files' is hashed files object
const files = require('test/wf/...')
const WebTorrent = require('webtorrent')
const client = new WebTorrent()

;(function seedFiles () {
  let hashArray = []
  for (let hash in files) {
    hashArray.push(hash)
  }
  client.seed(hashArray)
})()
