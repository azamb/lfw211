'use strict'

function exercise (myEnvVar) {
  // TODO return a child process with
  // a single environment variable set
  // named MY_ENV_VAR. The MY_ENV_VAR
  // environment variable's value should
  // be the value of the myEnvVar parameter
  // passed to this exercise function
  return require('child_process').spawnSync(process.argv[0], ['child.js'], { env: { MY_ENV_VAR: myEnvVar }})
  // https://nodejs.org/docs/latest-v16.x/api/child_process.html#child_processspawnsynccommand-args-options
}

module.exports = exercise
