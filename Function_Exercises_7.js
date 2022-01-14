function swap(a,b){
    let temp = b;
    b = a;
    a = temp;
    x = [a,b];
    return x;
}
function run(){
    let sothunhat = parseFloat(document.getElementById("1st").value);
    let sothuhai = parseFloat(document.getElementById("2nd").value);
    let mang = swap(sothunhat,sothuhai);
    let result1 = mang[0];
    let result2 = mang[1];
    document.getElementById("result").innerText= "Số thứ nhất là " + result1 + ", số thứ hai là " + result2;
}