# Dekajs

> DEKAtrian for JavaScript

This is a simple library for converting dates between [Dekatrian](https://www.facebook.com/dekatrian/) and [Gregorian](https://en.wikipedia.org/wiki/Adoption_of_the_Gregorian_calendar) calendars. This library is not official.

This package is compatible with [StandardJS](https://standardjs.com) and [LibreJS](https://www.gnu.org/software/librejs).

## Install

This project uses [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com).

``` bash
$ npm install @sepbit/dekajs
```

## Usage

CommonJS module.

``` javascript
const dekatrian = require('@sepbit/dekajs')

// Convert from Dekatrian to Gregorian calendars
dekatrian.dekaToGreg(2018, 13, 28)
// Return string, 2018-12-31

// Convert from Gregorian to Dekatrian calendars
dekatrian.gregToDeka(2018, 12, 31)
// Return string, 2018-13-28
```

ECMAScript module.


``` html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Title</title>
  </head>
  <body>
    <script type="module">
      import { dekaToGreg, gregToDeka } from 'https://unpkg.com/@sepbit/dekajs/src/main.js'

      // Convert from Dekatrian to Gregorian calendars
      dekaToGreg(2018, 13, 28)
      // Return string, 2018-12-31

      // Convert from Gregorian to Dekatrian calendars
      gregToDeka(2018, 12, 31)
      // Return string, 2018-13-28
    </script>
  </body>
</html>
```

## Contributing

Pull Requests not accepted.

## Security

If you discover any security related issues, please email `contato@sepbit.com` instead of using the issue tracker.

## License

GPL-3.0-or-later, please see [COPYING](COPYING) file for more information.
