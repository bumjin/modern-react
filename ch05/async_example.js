const fs = require("fs")

console.log("point a")
fs.writeFile("test_async.txt", "Hello JavaScript", function(error) {
  console.log("point b")
  fs.readFile("test_async.txt", (error, data) => {
    console.log("point c")
    console.log(data.toString())
  })
  console.log("point d")
})
console.log("point e")