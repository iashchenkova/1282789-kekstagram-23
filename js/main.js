const randomNumber = function (from, to) {
  if (from > to) {
    return false;
  } else {
    const random = from + Math.random() * (to + 1 - from);
    return (Math.ceil(random));
  }
};

randomNumber(14, 70);

const lineLength = function (txt, maxLenght) {
  if (maxLenght >= txt){
    return true;
  }
  else {
    return false;
  }
};

lineLength(50,20);
