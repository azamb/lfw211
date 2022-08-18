const tap = require('tap')

const store = require('../store')

tap.test('error is thrown', t => {
  store('Lol!', (err, value) => {
    t.plan(3)
    t.ok(err)
    t.type(err, Error)
    t.strictSame(err, Error('input must be a buffer'))
  })
})

tap.test('success', t => {
  const b = Buffer.from('Hi!')
  store(b, (err, value) => {
    t.plan(2)
    t.type(value, 'object')
    t.equal(value.id.length, 4)

  })
})