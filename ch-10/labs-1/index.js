'use strict'
const assert = require('assert')

// https://nodejs.org/docs/latest-v16.x/api/errors.html#error-propagation-and-interception
function parseUrl (str) {
  let parsed = null
  try {
    parsed = new URL(str)
  } catch (err) {
    console.error(`error: ${err}`)
  }
  return parsed
}

assert.doesNotThrow(() => { parseUrl('invalid-url') })
assert.equal(parseUrl('invalid-url'), null)
assert.deepEqual(
  parseUrl('http://example.com'),
  new URL('http://example.com')
)
console.log('passed!')