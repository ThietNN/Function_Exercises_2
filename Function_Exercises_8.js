function reversearray(x){
    let i;
    let k = x.length -1
    let temp;
    for (i=0;i<=(x.length)/2;){
        temp = x[i];
        x[i] = x[k];
        x[k] = temp;
        i++;
        k--;
    }
    return x;
}
let sample = [1,2,3,4,5,6,7];
result = reversearray(sample);
console.log(result);