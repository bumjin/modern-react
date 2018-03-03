
/* 
a = [1, 2, 3, 4, 5]

for(let i = a.length -1; i >=0; i--) {
  console.log(a[i])
}
 */

function * reverse(array) {
  for(let i = array.length -1; i >=0; i--) {
    yield array[i]
  }
  
}

a = [1, 2, 3, 4, 5]

for(const value of reverse(a)) {
  console.log(value)
}