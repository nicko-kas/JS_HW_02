// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і
// велечину базового шрифта ("20px") і вертає конвертований розмір в
// пікселях

function remToPixel(rem, pixel) {
  return rem * pixel;
}

console.log(remToPixel(2, 20));
