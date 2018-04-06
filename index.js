

/**
 * Sort array of dates chrnologically.
 *
 * This module also allows to sort objects chronologically
 * with a given property name.
 *
 * Exammples:
 *
 *  memoirs([
 *    new Date('01-01-2100'),
 *    new Date('01-01-2000'),
 *    new Date('01-01-2300')
 *  ])
 *
 *  memoirs([
 *   {expiry: new Date('01-01-2100')},
 *   {expiry: new Date('01-01-2000')},
 *   {expiry: new Date('01-01-2300'})
 *  ], 'expiry')
 *
 * @param {Array} arr
 * @param {String?} property
 * @return {Array}
 * @api public
 */

module.exports = (arr, property) => {
  return arr.map(time => {
    if (property) {
      return {
        ...time,
        [property] : parse(time[property])
      }
    } else return parse(time)
  }).sort((before, after) => {
    if (property) {
      return before[property] - after[property]
    } else {
      return before - after
    }
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
