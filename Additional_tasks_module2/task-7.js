// Написати ф-ю <strong>rgbToHex</strong> яка приймає колір в форматі
// rgb і повертає колір в форматі hex

function RGBToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  console.log(r);
  console.log(g);
  console.log(b);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

console.log(RGBToHex(15, 250, 102));
