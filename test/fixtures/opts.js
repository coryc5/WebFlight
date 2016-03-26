const path = require('path')

module.exports = {
  // opts1: {
  //   originalHtml: path.join(__dirname, 'index.html'),
  //   filesFolder: path.join(__dirname, 'img'),
  //   filesRoute: 'img/',
  //   jsOutputDL: path.join(__dirname, 'webflight.js'),
  //   jsOutputUL: path.join(__dirname, 'wf/seedUL.js'),
  //   htmlOutput: path.join(__dirname, 'wf/index.html'),
  //   route: '/'
  // },
  // opts2:  {
  //   originalHtml: path.join(__dirname, 'index.html'),
  //   filesFolder: path.join(__dirname, 'img'),
  //   filesRoute: 'img/',
  //   jsOutputDL: path.join(__dirname, 'webflight.js'),
  //   jsOutputUL: path.join(__dirname, 'wf/seedUL.js'),
  //   htmlOutput: path.join(__dirname, 'wf/index.html'),
  //   route: '/'
  // },
  // opts3: {
  //   originalHtml: path.join(__dirname, 'index.html'),
  //   filesFolder: path.join(__dirname, 'img'),
  //   filesRoute: 'img/',
  //   jsOutputDL: path.join(__dirname, 'webflight.js'),
  //   jsOutputUL: path.join(__dirname, 'wf/seedUL.js'),
  //   htmlOutput: path.join(__dirname, 'wf/index.html'),
  //   route: '/'
  // },
  opts4: {
    siteUrl: 'http://localhost:3000',
    assetsPath: [path.join(__dirname, 'img'), path.join(__dirname, 'videos')],
    assetsRoute: ['bird-imgs/', 'bird-videos/', 'other-imgs/'],
    routes: {
      '/': path.join(__dirname, 'index.html'),
      '/how.html': path.join(__dirname, 'how.html')
    }
  }
}
