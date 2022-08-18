const tap = require('tap')
const store = require('../store')

tap.test('rejects', async t => {
  t.plan(1)
  await t.rejects(store(123))
})

tap.test('returns id', async t => {
  t.plan(2)
  const result = await store(Buffer.from('hi!'))
  t.type(result, 'object')
  t.same(result.id.length, 4)
})

