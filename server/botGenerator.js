const spawn = require('electron-spawn')

module.exports = botGenerator

/**
 * @param (String) script
 */

function botGenerator (script) {
  return function botGenerator (req, res, next) {
    if (req.headers.count === 2) {
      console.log('beginning electron-spawn')
      const electron = spawn(script, {
        detached: true
      })
      electron.stderr.on('data', function (data) {
        console.error('error', data.toString())
      })
      electron.stdout.on('data', function (data) {
        console.log(data.toString())
      })
    }
    next()
  }
}
