/**
 * @source: https://github.com/vitorteccom/dekajs
 *
 * @licstart  The following is the entire license notice for the
 * JavaScript code in this page.
 *
 * Dekajs - DEKAtrian for JavaScript
 * Copyright (C) 2017-2019  Vitortec.com
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 * ECMAScript version 6
 *
 * @author    Vitor Guia <vitor.guia@vitortec.com>
 * @copyright 2017-2019 Vitortec.com
 * @license   GPL-3.0-or-later
 * @see       {@link https://github.com/vitorteccom/dekajs|Repository of Dekajs}
 */

import test from 'ava'
import dekatrian from '../lib/main'

/** Test private function checkLeapYear */
test('400 year', t => {
  t.is(dekatrian.gregToDeka(400, 1, 1), '400-0-1')
})

/** Test private function checkGregorian */
test('Error 2016-2-30', t => {
  const error = t.throws(() => {
    dekatrian.gregToDeka(2016, 2, 30)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Gregorian date')
})

test('Error 2018-2-29', t => {
  const error = t.throws(() => {
    dekatrian.gregToDeka(2018, 2, 29)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Gregorian date')
})

test('Error 2018-1-32', t => {
  const error = t.throws(() => {
    dekatrian.gregToDeka(2018, 1, 32)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Gregorian date')
})

test('Error 2018-13-31', t => {
  const error = t.throws(() => {
    dekatrian.gregToDeka(2018, 4, 31)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Gregorian date')
})

/** Test private function checkDekatrian */
test('Error 2016-0-3', t => {
  const error = t.throws(() => {
    dekatrian.dekaToGreg(2016, 0, 3)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Dekatrian date')
})

test('Error 2018-0-2', t => {
  const error = t.throws(() => {
    dekatrian.dekaToGreg(2018, 0, 2)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Dekatrian date')
})

test('Error 2018-14-2', t => {
  const error = t.throws(() => {
    dekatrian.dekaToGreg(2018, 14, 2)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Dekatrian date')
})

/** Test public function dekaToGreg */
test('dekaToGreg - Achronian day', t => {
  t.is(dekatrian.dekaToGreg(2018, 0, 1), '2018-1-1')
})

test('dekaToGreg - Sinchronian day', t => {
  t.is(dekatrian.dekaToGreg(2016, 0, 2), '2016-1-2')
})

test('dekaToGreg - Other day', t => {
  t.is(dekatrian.dekaToGreg(2018, 13, 28), '2018-12-31')
})

/** Test public function gregToDeka */
test('gregToDeka - Achronian day', t => {
  t.is(dekatrian.gregToDeka(2018, 1, 1), '2018-0-1')
})

test('gregToDeka - Sinchronian day', t => {
  t.is(dekatrian.gregToDeka(2016, 1, 2), '2016-0-2')
})

test('gregToDeka - Other day', t => {
  t.is(dekatrian.gregToDeka(2018, 12, 31), '2018-13-28')
})
