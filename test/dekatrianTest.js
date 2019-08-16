/**
 * Dekajs - DEKAtrian for JavaScript
 * Copyright (C) 2017-2019  SEPBIT
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * ECMAScript version 6
 *
 * @author    Vitor Guia <contato@vitor.guia.nom.br>
 * @copyright 2017-2019 SEPBIT
 * @license   GPL-3.0-or-later
 * @see       {@link https://notabug.org/sepbit/dekajs|Repository of Dekajs}
 */

import test from 'ava'
import { dekaToGreg, gregToDeka } from '../lib/main.js'

/** Test private function checkLeapYear */
test('400 year', t => {
  t.is(gregToDeka(400, 1, 1), '400-0-1')
})

/** Test private function checkGregorian */
test('Error 2016-2-30', t => {
  const error = t.throws(() => {
    gregToDeka(2016, 2, 30)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Gregorian date')
})

test('Error 2018-2-29', t => {
  const error = t.throws(() => {
    gregToDeka(2018, 2, 29)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Gregorian date')
})

test('Error 2018-1-32', t => {
  const error = t.throws(() => {
    gregToDeka(2018, 1, 32)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Gregorian date')
})

test('Error 2018-13-31', t => {
  const error = t.throws(() => {
    gregToDeka(2018, 4, 31)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Gregorian date')
})

/** Test private function checkDekatrian */
test('Error 2016-0-3', t => {
  const error = t.throws(() => {
    dekaToGreg(2016, 0, 3)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Dekatrian date')
})

test('Error 2018-0-2', t => {
  const error = t.throws(() => {
    dekaToGreg(2018, 0, 2)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Dekatrian date')
})

test('Error 2018-14-2', t => {
  const error = t.throws(() => {
    dekaToGreg(2018, 14, 2)
  }, Error)

  t.is(error.message, 'The provider arguments are not a valid Dekatrian date')
})

/** Test public function dekaToGreg */
test('dekaToGreg - Achronian day', t => {
  t.is(dekaToGreg(2018, 0, 1), '2018-1-1')
})

test('dekaToGreg - Sinchronian day', t => {
  t.is(dekaToGreg(2016, 0, 2), '2016-1-2')
})

test('dekaToGreg - Other day', t => {
  t.is(dekaToGreg(2018, 13, 28), '2018-12-31')
})

/** Test public function gregToDeka */
test('gregToDeka - Achronian day', t => {
  t.is(gregToDeka(2018, 1, 1), '2018-0-1')
})

test('gregToDeka - Sinchronian day', t => {
  t.is(gregToDeka(2016, 1, 2), '2016-0-2')
})

test('gregToDeka - Other day', t => {
  t.is(gregToDeka(2018, 12, 31), '2018-13-28')
})
