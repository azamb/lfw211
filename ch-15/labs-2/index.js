'use strict'

const { spawn } = require('child_process')

function exercise (command, args) {
  // https://nodejs.org/docs/latest-v16.x/api/child_process.html#optionsstdio
  return spawn(command, args, { stdio: ['ignore', 'inherit', 'pipe']})
}

module.exports = exercise