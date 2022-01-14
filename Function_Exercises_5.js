function checkMin(a,b,c){
    let max;
    if (a<b){
        max = b;
        if(b<c){
            max = c;
        }
    }else if (b<c){
        max = c
    }else{
        max = a;
    }
    return max;
}
function run(){
    x = parseFloat(document.getElementById("1st").value);
    y = parseFloat(document.getElementById("2nd").value);
    z = parseFloat(document.getElementById("3rd").value);
    max =checkMin(x,y,z);
    document.getElementById("result").innerText = "Số lớn nhất là " + max;
}