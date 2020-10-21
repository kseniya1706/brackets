module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const arrFromStr = str.split('');

  const length = arrFromStr.length;
  let count = 0;

  for (let i = 0; i <= length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (arrFromStr[i] === bracketsConfig[j][0] &&
          arrFromStr[i + 1] == bracketsConfig[j][1]) {
            arrFromStr.splice(i, 2);
                i = -1;
            } else {
                continue;
            }
        }
    }

    return arrFromStr.length === 0 ? true : false
}
