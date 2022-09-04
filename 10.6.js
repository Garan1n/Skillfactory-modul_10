let arrr = [1,1,2,1];
function result(newArr) {
    for(let i = 0; i < newArr.length-1; i++) {
    if(newArr[i] !== newArr[++i]) {
        return false;
    }
    }
    return true;
}
console.log(result(arrr))




const arr = [0,1,2,3,4,6,null,NaN,'str'];

let chet = 0;
let noChet = 0;
let nul = 0;

for(i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'number' &&! isNaN(arr[i])) {
    if (arr[i]=== 0) {
        nul += 1;
    }
    else if (arr[i] % 2 === 0) {
        chet += 1;
    }
    else {
        noChet += 1;
    }
    }
}
console.log(chet)
console.log(noChet)
console.log(nul)