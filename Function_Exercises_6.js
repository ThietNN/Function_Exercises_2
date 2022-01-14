function checkPositive(x){
    check = true;
    if (x<0){
        check = false;
    }
    return check;
}
function run(){
    let a = parseFloat(document.getElementById("input").value);
    if (checkPositive(a)){
        document.getElementById("result").innerText = a + " là số nguyên dương"
    }
    else{
        document.getElementById("result").innerText = a + " không phải là số nguyên dương"
    }
}