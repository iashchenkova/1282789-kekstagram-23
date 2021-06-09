let randomNumber = function (from, to) {
  if (from > to) {
   console.log("что-то пошло не так");
}  else {
  let random = from + Math.random() * (to + 1 - from);
  console.log(Math.ceil(random));
  }
};

randomNumber(14, 60);

let lineLength = function (txt, max_lenght) {
  if (max_lenght >= txt){
  console.log("Пиши ещё");
 }
 else {
  console.log("Символы кончились :(");
 }
};

lineLength(50,50);
