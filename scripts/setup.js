const fs = require("node:fs")

const dirs = [
  "images",
  "images/answers",
  "images/questions",
  "images/raw",
  "images/raw_black"
]

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
})

// if input exists, download pokemon