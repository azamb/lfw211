// npm install --save-dev tap
// https://node-tap.org/docs/api/asserts/
const tap = require('tap')

const uppercase = require('../uppercase')

tap.test('input must be a string', t => {
  t.plan(1)
  const expectedError = new Error('input must be a string')

  t.throws(function () { uppercase(true) }, expectedError)
})

tap.test('uppercase success', t => {
  t.plan(1)

  const expected = 'T'
  const result = uppercase('t')

  t.equal(expected, result)
})
