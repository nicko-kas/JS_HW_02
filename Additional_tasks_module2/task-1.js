// Написати ф-ю <strong>capitalize</strong> яка буде приймати строку
// і буде вертати нову строку де кожне слово буде починатися з
// великої літери.
// </p>
// <p>
// <code>

function capitalize(string) {
  let arr = string.split(" ");
  let word;
  let capital = "";
  for (let i = 0; i < arr.length; i += 1) {
    word = arr[i];
    capital = capital + " " + word[0].toUpperCase() + word.slice(1);
  }
  return console.log(capital);
}

capitalize("the quick brown fox test"); // 'The Quick Brown Fox '
