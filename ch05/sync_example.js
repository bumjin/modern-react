const fs = require("fs")

fs.writeFileSync("test_sync.txt", "Hello Javascript")

const content = fs.readFileSync("test_sync.txt").toString()

console.log (content)