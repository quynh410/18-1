let mangSoNguyen = [2, 3, 5, 7, 10, 13, 17, 20];

function laSoNguyenTo(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log("Các số nguyên tố trong mảng:");
  for (let i = 0; i < mangSoNguyen.length; i++) {
    let soHienTai = mangSoNguyen[i];
    if (laSoNguyenTo(soHienTai)) {
      console.log(soHienTai);
    }
  }