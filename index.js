

module.exports = (arr, property) => {
  return arr.map(parse).sort((before, after) => {
    return before - after
  })
}


/**
 * Parse given time into a date in ms.
 *
 * @param {Date|Number|String} time
 * @return {Number}
 * @api private
 */

function parse (time) {
  return typeof time === 'number' ? time : Date.parse(time)
}
