const images = require("images")

function pad (n) {
  var len = 3 - (''  +n).length
  return (len > 0 ? new Array(++len).join('0') : '') + n
}

for (let i = 1; i < 152; i++) {
  let number = pad(i)
  images("./images/background.png")
  .size(400)
  .draw(images(`./images/raw_black/${number}.png`), 10, 10)
  .save(`./images/questions/${number}.jpg`, {
      quality : 80
  })
}