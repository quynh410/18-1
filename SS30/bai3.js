let chuoiNhap = prompt("Nhập vào một chuỗi:");

function tachKyTu(str) {
    let kyTuChu = [];
    let kyTuSo = [];
    let kyTuDacBiet = [];
  
    for (let i = 0; i < str.length; i++) {
      let kyTu = str.charAt(i);
  
      if (/[a-zA-Z]/.test(kyTu)) {
        kyTuChu.push(kyTu);
      } else if (/[0-9]/.test(kyTu)) {
        kyTuSo.push(kyTu);
      } else {
        kyTuDacBiet.push(kyTu);
      }
    }
    let ketQua = kyTuChu.concat(kyTuSo, kyTuDacBiet);
    return ketQua;
  }
  let mangKyTu = tachKyTu(chuoiNhap);
  console.log(mangKyTu);
  