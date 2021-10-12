# @onefloms/mime-types

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coveralls-image]][coveralls-url]

> This package is a clone of [jshttp/mime-types](https://github.com/jshttp/mime-types) with the added compatibility for any JS environment including web. Also supports TypeScript out-of-the-box (no need to install `@types/mime-types` anymore) 

The ultimate javascript content-type utility.

Similar to [the `mime@1.x` module](https://www.npmjs.com/package/mime), except:

- __No fallbacks.__ Instead of naively returning the first available type,
  `mime-types` simply returns `false`, so do
  `var type = mime.lookup('unrecognized') || 'application/octet-stream'`.
- No `new Mime()` business, so you could do `var lookup = require('mime-types').lookup`.
- No `.define()` functionality
- Bug fixes for `.lookup(path)`

Otherwise, the API is compatible with `mime` 1.x.

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install @onefloms/mime-types
```

## Adding Types

All mime types are based on [mime-db](https://www.npmjs.com/package/mime-db),
so open a PR there if you'd like to add mime types.

## API

```js
var { lookup, contentType} = require('@onefloms/mime-types');
// or
import { lookup, contentType } from '@onefloms/mime-types';
```

All functions return `false` if input is invalid or not found.

### lookup(path)

Lookup the content-type associated with a file.

```js
lookup('json') // 'application/json'
lookup('.md') // 'text/markdown'
lookup('file.html') // 'text/html'
lookup('folder/file.js') // 'application/javascript'
lookup('folder/.htaccess') // false

lookup('cats') // false
```

### contentType(type)

Create a full content-type header given a content-type or extension.
When given an extension, `lookup` is used to get the matching
content-type, otherwise the given content-type is used. Then if the
content-type does not already have a `charset` parameter, `charset`
is used to get the default charset and add to the returned content-type.

```js
contentType('markdown') // 'text/x-markdown; charset=utf-8'
contentType('file.json') // 'application/json; charset=utf-8'
contentType('text/html') // 'text/html; charset=utf-8'
contentType('text/html; charset=iso-8859-1') // 'text/html; charset=iso-8859-1'

// from a full path
contentType(path.extname('/path/to/file.json')) // 'application/json; charset=utf-8'
```

### extension(type)

Get the default extension for a content-type.

```js
extension('application/octet-stream') // 'bin'
```

### charset(type)

Lookup the implied default charset of a content-type.

```js
charset('text/markdown') // 'UTF-8'
```

### var type = types[extension]

A map of content-types by extension.

### [extensions...] = extensions[type]

A map of extensions by content-type.

## License

[MIT](LICENSE)

[ci-image]: https://badgen.net/github/checks/floms/mime-types/master?label=ci
[ci-url]: https://github.com/floms/mime-types/actions?query=workflow%3Aci
[coveralls-image]: https://badgen.net/coveralls/c/github/floms/mime-types/master
[coveralls-url]: https://coveralls.io/r/floms/mime-types?branch=master
[node-version-image]: https://badgen.net/npm/node/@onefloms/mime-types
[node-version-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/@onefloms/mime-types
[npm-url]: https://npmjs.org/package/@onefloms/mime-types
[npm-version-image]: https://badgen.net/npm/v/@onefloms/mime-types
