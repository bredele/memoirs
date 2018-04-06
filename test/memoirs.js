/**
 * Dependencie(s)
 */

const test = require('tape')
const history = require('..')

test('sort dates', assert => {
  assert.plan(1)
  const sorted = history([
    new Date('01-01-2100').getTime(),
    new Date('01-01-2000').getTime(),
    new Date('01-01-2300').getTime(),
  ])
  assert.deepEqual(sorted, [946710000000, 4102470000000, 10413817200000])
})


test('sort dates and convert in ms', assert => {
  assert.plan(1)
  const sorted = history([
    new Date('01-01-2100'),
    new Date('01-01-2000'),
    new Date('01-01-2300'),
  ])
  assert.deepEqual(sorted, [946710000000, 4102470000000, 10413817200000])
})

test('sort work with date string formats', assert => {
  assert.plan(1)
  const sorted = history([
    new Date('01-01-2100'),
    'Jan, 01 2000',
    new Date('01-01-2300'),
  ])
  assert.deepEqual(sorted, [946710000000, 4102470000000, 10413817200000])
})
