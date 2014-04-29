var bisect = require("../bisect")

require("tape")("testing", function(t) {

  t.assert(Math.abs(bisect(function(x) {
    return x*x - 9 > 0
  }, -10, 10, 1e-8) - 3) < 1e-8)

  t.end()
})