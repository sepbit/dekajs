# Dekajs
DEKAtrian for JavaScript

[![Software License](https://img.shields.io/github/license/vitorteccom/dekajs.svg)](LICENSE)
[![Latest Version on NPM](https://img.shields.io/npm/v/@vitorteccom/dekajs.svg)](https://npmjs.org/package/@vitorteccom/dekajs)
[![Total Downloads](https://img.shields.io/npm/dt/@vitorteccom/dekajs.svg)](https://npmjs.org/package/@vitorteccom/dekajs)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/vitorteccom/dekajs/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/vitorteccom/dekajs/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/vitorteccom/dekajs/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/vitorteccom/dekajs/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/vitorteccom/dekajs/badges/build.png?b=master)](https://scrutinizer-ci.com/g/vitorteccom/dekajs/build-status/master)
[![Code Intelligence Status](https://scrutinizer-ci.com/g/vitorteccom/dekajs/badges/code-intelligence.svg?b=master)](https://scrutinizer-ci.com/code-intelligence)

This is a simple library for converting dates between [Dekatrian](https://www.facebook.com/dekatrian/) and [Gregorian](https://en.wikipedia.org/wiki/Adoption_of_the_Gregorian_calendar) calendars. This library is not official.

This package is compatible with [Standard](https://github.com/standard/standard) and [LibreJS](https://www.gnu.org/software/librejs).

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
dekatrian.dekatoGreg(2018, 13, 28)
// Return string, 2018-12-31

// Convert from Gregorian to Dekatrian calendars
dekatrian.gregToDeka(2018, 12, 31)
// Return string, 2018-13-28
```

ECMAScript module.


``` html
<script type="module">
  import {dekatoGreg, gregToDeka} from 'https://unpkg.com/@vitorteccom/dekajs@3.0.0/lib/dekatrian.mjs'

  // Convert from Dekatrian to Gregorian calendars
  dekatoGreg(2018, 13, 28)
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
$ npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.

## Security

If you discover any security related issues, please email ``contato@vitortec.com`` instead of using the issue tracker.

## Credits

- [Vitor Guia](https://github.com/vitoranguia)
- [All Contributors](../../contributors)

## License

GPL-3.0-or-later. Please see [License File](LICENSE.md) for more information.
