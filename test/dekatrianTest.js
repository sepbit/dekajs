/**
 * Dekajs - DEKAtrian for JavaScript
 * Copyright (C) 2018  Vitortec.com
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
 * Node.js version 8.11
 *
 * @version   3.0.1
 * @author    Vitor Guia <vitor.guia@vitortec.com>
 * @copyright 2018 Vitortec.com
 * @license   http://www.gnu.org/licenses GPL-3.0-or-later
 * @see       {@link https://github.com/vitorteccom/dekajs|Repository of Dekajs}
 */

/* global describe, it */

const assert = require('assert')
const dekatrian = require('../lib/dekatrian')

describe('Check leap year', function () {
  it('400 year', function (done) {
    assert.ok(dekatrian.gregToDeka(400, 1, 1))
    done()
  })
})

describe('Check Dekatrian', function () {
  it('Error 2016-0-3', function (done) {
    assert.ifError(dekatrian.dekatoGreg(2016, 0, 3))
    done()
  })

  it('Error 2018-0-2', function (done) {
    assert.ifError(dekatrian.dekatoGreg(2018, 0, 2))
    done()
  })

  it('Error 2018-14-2', function (done) {
    assert.ifError(dekatrian.dekatoGreg(2018, 14, 2))
    done()
  })
})

describe('Dekatrian to Gregorian', function () {
  it('Achronian day', function (done) {
    assert.equal('2018-1-1', dekatrian.dekatoGreg(2018, 0, 1))
    done()
  })

  it('Sinchronian day', function (done) {
    assert.equal('2016-1-2', dekatrian.dekatoGreg(2016, 0, 2))
    done()
  })

  it('Other day', function (done) {
    assert.equal('2016-12-31', dekatrian.dekatoGreg(2016, 13, 28))
    done()
  })
})

describe('Gregorian to Dekatrian', function () {
  it('Achronian day', function (done) {
    assert.equal('2018-0-1', dekatrian.gregToDeka(2018, 1, 1))
    done()
  })

  it('Sinchronian day', function (done) {
    assert.equal('2016-0-2', dekatrian.gregToDeka(2016, 1, 2))
    done()
  })
})
