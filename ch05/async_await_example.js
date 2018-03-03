const fs = require("fs")

async function readAll () {
  const a = await read("test_async.txt")
  console.log(a)
  const b = await read("test_async.txt")
  console.log(b)
  const c = await read("test_async.txt")
  console.log(c)
}
readAll()


function read(filename) {
  return new Promise((resolve) => {
    fs.readFile(filename, (error, data) => {
      resolve(data.toString())
    })
  }) 
}