'use strict'
const os = require('node:os')

setTimeout(() => {
  console.log(process.uptime()) // TODO output uptime of process – https://nodejs.org/docs/latest-v16.x/api/process.html#processuptime
  console.log(os.uptime()) // TODO output uptime of OS – https://nodejs.org/docs/latest-v16.x/api/os.html#osuptime
  console.log(os.totalmem()) // TODO output total system memory – https://nodejs.org/docs/latest-v16.x/api/os.html#ostotalmem
  console.log(process.memoryUsage().heapTotal) // TODO output total heap memory – https://nodejs.org/docs/latest-v16.x/api/process.html#processmemoryusage
}, 1000)