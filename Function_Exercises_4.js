function checkNum(x){
    let check = false;
    if (x>=0 || x<0){
        check = true;
    }
    return check;
}

function run(){
    a = document.getElementById("input").value
    if (checkNum(a)){
        document.getElementById("result").innerText = "Dữ liệu vừa nhập là dạng số"
    }
    else{
        document.getElementById("result").innerText = "Dữ liệu vừa nhập không phải dạng số"
    }
}