pad = (n) => {
  return (3 - ('' + n).length > 0 ? new Array(4 - ('' + n).length).join('0') : '') + n;
}

pad4 = (n) => {
  const len = 4 - ('' + n).length;
  return (len > 0 ? new Array(++len).join('0') : '') + n;
}

module.exports = {
  pad,
  pad4
};