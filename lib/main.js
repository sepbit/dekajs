
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
 * @access    private
 */

const dekatrian = require('./dekatrian.js')
module.exports = {
  dekaToGreg: dekatrian.dekaToGreg,
  gregToDeka: dekatrian.gregToDeka
}
