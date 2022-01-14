function sqr(x){
    return x*x;
}
function run() {
    let a = parseFloat(document.getElementById("input").value)
    b = sqr(a);
    document.getElementById("result").innerText = b;
}