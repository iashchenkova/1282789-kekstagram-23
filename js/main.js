const randomNumber = function (from, to) {
  if (from < to) {
    const random = from + Math.random() * (to + 1 - from);
    return (Math.ceil(random));
  }
  return false;
};

randomNumber(14, 70);

const lineLength = (txt, maxLength) => {
  return maxLength >= txt;
};

lineLength(14,18);
