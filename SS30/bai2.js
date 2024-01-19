let n = prompt("Nhập vào một số nguyên dương:");

function soNguyenDuong(n) {
    return Number.isInteger(n) && n > 0;
  }
  

  function inSoNguyenDuongLe(n) {
    let tong = 0;
    let dem = 0;
  
    for (let i = 1; i <= n; i += 2) {

      console.log(i);
      tong += i;
      dem++;
      if (tong % 2 === 1) {
        break;
      }
    }
  
    console.log("Tổng số lẻ đã in ra:", tong);
    console.log("Số lượng số lẻ đã in ra:", dem);
  }
  if (soNguyenDuong(n)) {
    inSoNguyenDuongLe(parseInt(n));
  } else {
    console.log("Vui lòng nhập một số nguyên dương!");
  }