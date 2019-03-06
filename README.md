# Dekajs
DEKAtrian for JavaScript

[![Software License](https://img.shields.io/github/license/vitorteccom/dekajs.svg)](COPYING)
[![Latest Version on NPM](https://img.shields.io/npm/v/@vitorteccom/dekajs.svg)](https://npmjs.org/package/@vitorteccom/dekajs)
[![Total Downloads](https://img.shields.io/npm/dt/@vitorteccom/dekajs.svg)](https://npmjs.org/package/@vitorteccom/dekajs)
[![Build Status](https://travis-ci.com/vitorteccom/dekajs.svg?branch=master)](https://travis-ci.com/vitorteccom/dekajs)
[![Coverage Status](https://coveralls.io/repos/github/vitorteccom/dekajs/badge.svg?branch=master)](https://coveralls.io/github/vitorteccom/dekajs?branch=master)

This is a simple library for converting dates between [Dekatrian](https://www.facebook.com/dekatrian/) and [Gregorian](https://en.wikipedia.org/wiki/Adoption_of_the_Gregorian_calendar) calendars. This library is not official.

This package is compatible with [StandardJS](https://github.com/standard/standard) and [LibreJS](https://www.gnu.org/software/librejs).

## Structure
This is the directory structure.

```
doc/
lib/
node_modules/
test/
```


## Install

Via NPM.

``` bash
$ npm install @vitorteccom/dekajs
```

## Usage

CommonJS module.

``` javascript
const dekatrian = require('@vitorteccom/dekajs')

// Convert from Dekatrian to Gregorian calendars
dekatrian.dekaToGreg(2018, 13, 28)
// Return string, 2018-12-31

// Convert from Gregorian to Dekatrian calendars
dekatrian.gregToDeka(2018, 12, 31)
// Return string, 2018-13-28
```

ECMAScript module.


``` html
<script type="module">
  import { dekaToGreg, gregToDeka } from 'https://unpkg.com/@vitorteccom/dekajs/lib/main.mjs'

  // Convert from Dekatrian to Gregorian calendars
  dekaToGreg(2018, 13, 28)
  // Return string, 2018-12-31

  // Convert from Gregorian to Dekatrian calendars
  gregToDeka(2018, 12, 31)
  // Return string, 2018-13-28
</script>
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Testing

``` bash
$ npm test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.

## Security

If you discover any security related issues, please email ``contato@vitortec.com`` instead of using the issue tracker.

## Credits

- [Vitor Guia](https://github.com/vitoranguia)
- [All Contributors](../../contributors)

## License

GPL-3.0-or-later. Please see [COPYING File](COPYING) for more information.
