/**
 * @source: https://github.com/vitorteccom/dekajs
 *
 * @licstart  The following is the entire license notice for the
 * JavaScript code in this page.
 *
 * Dekajs - DEKAtrian for JavaScript
 * Copyright (C) 2018  Vitortec.com
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
 * @version   2.1.0
 * @author    Vitor Guia <vitor.guia@vitortec.com>
 * @copyright 2018 Vitortec.com
 * @license   http://www.gnu.org/licenses GPL-3.0-or-later
 * @see       {@link https://github.com/vitorteccom/dekajs|Repository of Dekajs}
 */

/**
 * Check if a year is leap year or not
 *
 * @access private
 *
 * @param {integer} year Dekatrian year
 *
 * @return {boolean} Dekatrian year is leap year or not
 */
function checkLeapYear (year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true
  }
  if (year % 400 === 0) {
    return true
  }
  return false
}

/**
 * Check if a Dekatrian date is valid or not
 *
 * @access private
 *
 * @param {integer} year  Dekatrian year
 * @param {integer} month Dekatrian month
 * @param {integer} day   Dekatrian day
 *
 * @return {boolean} Dekatrian date is valid or not
 */
function checkDekatrian (year, month, day) {
  if (checkLeapYear(year)) {
    if (month === 0 && day > 2) {
      return false
    }
  } else {
    if (month === 0 && day > 1) {
      return false
    }
  }
  if (month > 13 || day > 28) {
    return false
  }
  return true
}

/**
 * Convert a Dekatrian date to Gregorian date
 *
 * @param {integer} year  Dekatrian year
 * @param {integer} month Dekatrian month
 * @param {integer} day   Dekatrian day
 *
 * @return {string} Gregorian date eg. 2018-12-31
 */
function dekatoGreg (year, month, day) {
  if (!checkDekatrian(year, month, day)) {
    return false
  }

  // leap year
  if (checkLeapYear(year)) {
    // Sinchronian day
    if (month === 0 && day === 2) {
      return year + '-1-2'
    }

    day++
  }

  // Achronian day
  if (month === 0 && day === 1) {
    return year + '-1-1'
  }

  let dayYear = (month * 28) - 28 + day + 1
  let gregDate = new Date(year, 0)
  gregDate = new Date(gregDate.setDate(dayYear))
  let gregYear = gregDate.getFullYear()
  let gregMonth = gregDate.getMonth() + 1
  let gregDay = gregDate.getDate()

  return gregYear + '-' + gregMonth + '-' + gregDay
}

/**
 * Convert a Gregorian date to Dekatrian dat
 *
 * @param {integer} year  Gregorian year
 * @param {integer} month Gregorian month
 * @param {integer} day   Gregorian day
 *
 * @return {string} Dekatrian date eg. 2018-13-28
 */
function gregToDeka (year, month, day) {
  let yearDay = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
  yearDay = yearDay[month] + day - 1

  // leap year
  if (checkLeapYear(year)) {
    // Sinchronian day
    if (month === 1 && day === 2) {
      return year + '-0-2'
    }

    day--
  }

  // Achronian day
  if (month === 1 && day === 1) {
    return year + '-0-1'
  }

  let dekaMonth = Math.floor(yearDay / 28)
  let dekaDay = yearDay - (dekaMonth * 28)
  dekaMonth++

  if (!dekaDay) {
    dekaDay = 28
    dekaMonth--
  }

  return year + '-' + dekaMonth + '-' + dekaDay
}

/**
 * ECMAScript module
 */
export {dekatoGreg, gregToDeka}
