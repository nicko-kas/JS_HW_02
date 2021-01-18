// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні
//               елементи

function nonUniqueElements(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    var count = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] == arr[i]) {
        count += 1;
      }
    }
    if (count >= 2) {
      newArr.push(arr[i]);
    }
  }
  return console.log(newArr);
}

nonUniqueElements([1, 2, 3, 1, 3]); // [1, 3, 1, 3]</code>
nonUniqueElements([1, 2, 3, 4, 5]); // []</code>
nonUniqueElements([5, 5, 5, 5, 5]); // [5, 5, 5, 5, 5]</code>
nonUniqueElements([10, 9, 10, 10, 9, 8]); // [10, 9, 10, 10,
