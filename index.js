

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
