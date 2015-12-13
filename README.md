# async.dowhilst

![Last version](https://img.shields.io/github/tag/Kikobeats/async.dowhilst.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/async.dowhilst/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/async.dowhilst)
[![Dependency status](http://img.shields.io/david/Kikobeats/async.dowhilst.svg?style=flat-square)](https://david-dm.org/Kikobeats/async.dowhilst)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/async.dowhilst.svg?style=flat-square)](https://david-dm.org/Kikobeats/async.dowhilst#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/async.dowhilst.svg?style=flat-square)](https://www.npmjs.org/package/async.dowhilst)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> The post-check version of [`whilst`](https://github.com/async-js/async.whilst). To reflect the difference in the order of operations, the arguments test and fn are switched.

## Install

```bash
npm install async.dowhilst --save
```
If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install async.dowhilst --save
```

and later link in your HTML:

```html
<script src="bower_components/async.dowhilst/dist/async.dowhilst.js"></script>
```
## Usage

```js
var doWhilst = require('async.dowhilst')
var count = 0

doWhilst(
  function condition() { return count < 5; },
  function loop(cb) {
    count++
    setTimeout(function () {
      cb(null, count)
    }, 1000)
  },
  function end(err, n) {
    // 5 seconds have passed, n = 5
  }
)
```

## API

### doWhilst(fn, test, cb)

__Arguments__

* `fn(callback)` - A function which is called each time `test` passes. The function is
passed a `callback(err)`, which must be called once it has completed with an
optional `err` argument.
* `test()` - synchronous truth test to perform before each execution of `fn`.
* `callback(err, [results])` - A callback which is called after the test
  function has failed and repeated execution of `fn` has stopped. `callback`
  will be passed an error and any arguments passed to the final `fn`'s callback.

## License

MIT © [Kiko Beats](http://kikobeats.com)
