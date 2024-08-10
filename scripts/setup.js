const fs = require("node:fs")

const dirs = [
  "images",
  "images/answers",
  "images/questions",
  "images/raw",
  "images/raw_black",
  "images/cards"
]

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
})
