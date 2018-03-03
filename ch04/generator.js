/*일반적인 함수
function counter() {/*
  return 1
}

value = counter()

console.log(value)
*/
//제네레이터 함수
function * counter() {
  //시작 부분부터 읽는 녀석
  yield 1
  yield 2
  yield 3
  return 1
}

generatorObject = counter()
/* console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
 */
// console.log(generatorObject.constructor)
for(const value of generatorObject) {
  console.log(value)
}