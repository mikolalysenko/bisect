"use strict"

function bisect(pred, lo, hi, tol) {
  tol = tol || 1e-8
  while(hi-lo>tol) {
    var m = (hi+lo)/2
    if(pred(m)) {
      hi = m
    } else {
      lo = m
    }
  }
  return lo
}
module.exports = bisect