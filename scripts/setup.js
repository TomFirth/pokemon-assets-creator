const fs = require("node:fs");
const config = require("../config");

config.directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
})
