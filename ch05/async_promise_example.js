const fs = require("fs")

/* new Promise((resolve) => {
  
  resolve(10)
}).then((value) => {
  console.log(value)
  return 20
}).then((value) => {
  console.log(value)
  return 30
}) */

read("test_async.txt").then((value) => {
  console.log(value)
  return read("test_async.txt")
}).then((value) => {
  console.log(value)
  return read("test_async.txt")
}).then((value) => {
  console.log(value)
  return read("test_async.txt")
}).then((value) => {
  console.log(value)
  return read("test_async.txt")
}).then((value) => {
  console.log(value)
  return read("test_async.txt")
})

function read(filename) {
  return new Promise((resolve) => {
    fs.readFile(filename, (error, data) => {
      resolve(data.toString())
    })
  }) 
}
