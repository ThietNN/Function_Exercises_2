function perimeter(a){
    result = a*2*3.14;
    return result;
}
function area(a){
    result = a*a*3.14;
    return result;
}
function run(){
    x = document.getElementById("input").value;
    chuvi = perimeter(x);
    dientich = area(x);
    document.getElementById("result").innerText = "Chu vi của hình tròn là: " + chuvi + ", Diện tích của hình tròn là: " + dientich;
}