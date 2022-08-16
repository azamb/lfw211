'use strict'
const assert = require('assert')
const buffer = Buffer.alloc(4096) // https://nodejs.org/docs/latest-v16.x/api/buffer.html#static-method-bufferallocsize-fill-encoding
console.log(buffer)

for (const byte of buffer) assert.equal(byte, 0)
console.log('passed!')
