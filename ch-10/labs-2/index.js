'use strict'
const fs = require('fs')
const assert = require('assert')

async function read (file) {
  // https://nodejs.org/docs/latest-v16.x/api/errors.html#error-propagation-and-interception
  try {
    const content = await fs.promises.readFile(file)
    return content
  } catch (err) {
    throw new Error('failed to read')
  }
}


async function check () {
  await assert.rejects(
    read('not-a-valid-filepath'),
    new Error('failed to read')
  )
  assert.deepEqual(
    await read(__filename),
    fs.readFileSync(__filename)
  )
  console.log('passed!')
}

check()
