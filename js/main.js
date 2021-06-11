const randomNumber = function (from, to) {
  if (from < to) {
    const random = from + Math.random() * (to + 1 - from);
    return (Math.ceil(random));
  }
  return false;
};

randomNumber(14, 70);

const lineLen = (txtLen, maxLen) => maxLen > txtLen;
lineLen(10, 12);