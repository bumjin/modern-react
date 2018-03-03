function * filter(array, condition) {
  for(const value of array)
    if(condition(value))
      yield value
}

a = [1, 2, 3, 4, 5]

for(const value of filter(a, (x) => x > 2 )) {
  console.log(value)
}