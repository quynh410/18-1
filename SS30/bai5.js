let chuoi = prompt("Nhập vào 1 chuỗi bất kì");

function chuoiNhap(str){
    let word = str.split(" ");
    let chuoiNhap = word.map(word =>{
        let tuCuoi = word.slice(-1);
        return word.slice(0, -1) + tuCuoi.toUpperCase();
    });
    let result = chuoiNhap.join(" ");
    console.log(result);
}
chuoiNhap(chuoi);