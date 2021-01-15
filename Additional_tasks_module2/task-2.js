// Написати ф-ю <strong>countVowels</strong> яка буде приймати строку
// і буде вертати кількість голосних літер. aeiouAEIOU - рядок з
// голосними в англ алфавіті
// </p>
// <p>
// <code>

function countVowels(string) {
  string = [...string];
  let cnt = 0;
  for (let i = 0; i < string.length; i += 1) {
    "aeiouAEIOU".includes(string[i]) ? (cnt = cnt + 1) : false;
  }

  return console.log(cnt);
}

countVowels("the quick brown fox"); // 5
