function checkinarray(a,x){
    let i;
    let count = 0;
    let check = false;
    for(i=0;i<x.length;i++){
        if(a === x[i]){
            count++;
            check = true;
        }
    }
    if(check){}
    else{
        count--;
    }
    return count;
}
function run() {
    let sample = ["t","h","i","e","t","n","a","b","c","d"];
    z = document.getElementById("input").value;
    result = checkinarray(z, sample);
    document.getElementById("result").innerText= result;
}
