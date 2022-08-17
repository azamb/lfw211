function f (n = 99) {
  if (n === 0) throw Error()
  f(n - 1)
}
f()
// starts debugger mode at the start of the program execution
// node --inspect-brk app.js – inspect mode with active breakpoint