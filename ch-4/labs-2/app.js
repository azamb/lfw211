function f (n = 99) {
  debugger // introduce a break point in the code manually
  if (n === 0) throw Error()
  f(n - 1)
}
f()
