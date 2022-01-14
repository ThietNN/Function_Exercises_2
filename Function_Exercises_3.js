function factorial(a){
    let result = 1;
    for (a;a>0;a--){
        result = result * a;
    }
    return result;
}

function run(){
    x = document.getElementById("input").value;
    result = factorial(x);
    document.getElementById("result").innerText = "Giai thừa của " + x + " là " + result;
}