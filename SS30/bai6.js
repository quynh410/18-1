let arr = [4, 6, 3, 7];

function countTriangLes(arr){
    let count = 0;
    arr.sort((a, b) => a - b);
    let n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
           for (let k = j + 1; k < n;k++){
            if (arr[i] + arr[j] > arr[k]) {
                count++;
            }
           }
    }
}
return count;
}
let result = countTriangLes(arr);

console.log("Số lượng hình tam giác có thể tạo ra là:", result);
