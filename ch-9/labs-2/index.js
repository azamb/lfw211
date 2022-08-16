'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

// https://nodejs.org/docs/latest-v16.x/api/events.html#error-events
ee.on('error', (err) => { console.log(`Original error: ${err}}`) })

ee.emit('error', Error('timeout'))
