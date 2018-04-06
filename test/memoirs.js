/**
 * Dependencie(s)
 */

const test = require('tape')
const history = require('..')

test('sort dates', assert => {
  assert.plan(1)
  const dates = [
    new Date('01-01-2100').getTime(),
    new Date('01-01-2000').getTime(),
    new Date('01-01-2300').getTime()
  ]
  const sorted = history(dates)
  assert.deepEqual(sorted, [dates[1], dates[0], dates[2]])
})


test('sort dates and convert in ms', assert => {
  assert.plan(1)
  const dates = [
    new Date('01-01-2100'),
    new Date('01-01-2000'),
    new Date('01-01-2300')
  ]
  const sorted = history(dates)
  assert.deepEqual(sorted, [dates[1].getTime(), dates[0].getTime(), dates[2].getTime()])
})

test('sort work with date string formats', assert => {
  assert.plan(1)
  const dates = [
    new Date('01-01-2100'),
    'Jan, 01 2000',
    new Date('01-01-2300'),
  ]
  const sorted = history(dates)
  assert.deepEqual(sorted, [new Date(dates[1]).getTime(), dates[0].getTime(), dates[2].getTime()])
})


test('should sort object containing dates with a given property name', assert => {
  assert.plan(1)
  const dates = [
    new Date('01-01-2100'),
    new Date('01-01-2000'),
    new Date('01-01-2300')
  ]
  const sorted = history([
    {expiry: dates[0]},
    {expiry: dates[1]},
    {expiry: dates[2]}
  ], 'expiry')
  assert.deepEqual(sorted, [
    {expiry: dates[1].getTime()},
    {expiry: dates[0].getTime()},
    {expiry: dates[2].getTime()}
  ])
})
