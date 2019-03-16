# Dekajs

[![Software License](https://img.shields.io/github/license/vitorteccom/dekajs.svg)](COPYING)
[![Latest Version on NPM](https://img.shields.io/npm/v/@vitorteccom/dekajs.svg)](https://npmjs.org/package/@vitorteccom/dekajs)
[![Total Downloads](https://img.shields.io/npm/dt/@vitorteccom/dekajs.svg)](https://npmjs.org/package/@vitorteccom/dekajs)
[![Build Status](https://travis-ci.com/vitorteccom/dekajs.svg?branch=master)](https://travis-ci.com/vitorteccom/dekajs)
[![Coverage Status](https://coveralls.io/repos/github/vitorteccom/dekajs/badge.svg?branch=master)](https://coveralls.io/github/vitorteccom/dekajs?branch=master)

> DEKAtrian for JavaScript

This is a simple library for converting dates between [Dekatrian](https://www.facebook.com/dekatrian/) and [Gregorian](https://en.wikipedia.org/wiki/Adoption_of_the_Gregorian_calendar) calendars. This library is not official.

This package is compatible with [StandardJS](https://github.com/standard/standard) and [LibreJS](https://www.gnu.org/software/librejs).

## Install

This project uses [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com).

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

## Contributing

Pull Requests not accepted, please contact us at: `contato@vitortec.com`.

### Contributors

- [Vitor Guia](https://github.com/vitoranguia)
- [All Contributors](https://github.com/vitorteccom/dekajs/contributors)

## License

GPL-3.0-or-later, please see [COPYING](COPYING) file for more information.
