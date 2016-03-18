# WebFlight

[WebFlight](http://www.webflight.io) enables a website's users to serve the content of that site.

### Install
```bash
npm install webflight --save
```

### Usage
```javascript
const WebFlight = require('webflight')
const webflight = WebFlight(opts, path)

webflight.init()```

// the options object
// the init method


## `webflight.redirect(req, res, next)`
Once seeding threshold is met, redirect requests to webflight routes.

## `webflight.start()`
Call starts the seeding process.

## `webflight.watch(req, res, next)`
Watches for http requests to server. Based on a threshold specified in opts, `.watch()` will call `.start()` to begin seeding. When peers are connected, initial seeds are no longer necessary and are killed

---

### Acknowledgements
WebFlight uses and :heart: [WebTorrent](http://www.webtorrent.io)

### License
MIT License (MIT)

Copyright (c) Team WebFlight

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
