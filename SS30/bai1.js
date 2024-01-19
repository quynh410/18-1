let array = [1, 2, 3, 2, 1];
let array2 = ["z", "z"];
let array3 = [1, "c", "c", 1];

function isArraySymmetric(arr) {

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
      if (arr[i] !== arr[j]) {
        return false;
      }
    }
    return true;
  }
console.log(isArraySymmetric(array));