pad = (n) => {
  var len = 4 - ('' + n).length;
  return (len > 0 ? new Array(++len).join('0') : '') + n;
}

module.exports = {
  pad
};