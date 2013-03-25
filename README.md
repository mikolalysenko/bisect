bisect
======
Floating point bisection method for JavaScript

Usage
=====
Install using npm:

    npm install bisect
    
And use as follows:

```javascript
var bisect = require("bisect")

//Find cube root of 5 to 8 decimal places
console.log(bisect(
  function(x) {
    return x * x * x - 5 > 0
  },
  -10, 10, 1e-8))
```

## `require("bisect")(predicate, lo, hi[, tolerance])`
Supposing that predicate is [monotone](http://en.wikipedia.org/wiki/Monotonic_function) over the interval [lo,hi), finds the first occurence of where predicate is true up to a resolution of tolerance.

Credits
=======
(c) 2013 Mikola Lysenko. MIT License