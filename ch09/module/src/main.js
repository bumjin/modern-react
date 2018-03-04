/* import {
  add,
  mul,
  test
} from './calculator' */

/* import {
  add as a,
  mul as m,
  test as t
} from './calculator' */

import * as cal from './calculator'
import gobsem from './gobsem'
/* console.log(add(10, 100))
console.log(mul(10, 100))
console.log(test)
 */

/* console.log(a(10, 100))
console.log(m(10, 100))
console.log(t) */

console.log(cal.add(10, 100))
console.log(cal.mul(10, 100))
console.log(cal.test)

console.log(gobsem(3, 5))