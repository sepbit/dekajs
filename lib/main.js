/**
 * ECMAScript module to CommonJS module
 *
 * @access private
 */

require = require('esm')(module)
module.exports = require('./main.mjs').default
