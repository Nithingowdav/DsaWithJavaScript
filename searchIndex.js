function seachIndex(arr, x){
    for(let i =0; i < arr.length; i++){
        if(arr[i] === x){
            return i;
        }
    }
    return -1;
}
let arr = [1,2,3,4,5,6,7,8,9,10];
let x = 5;
console.log(seachIndex(arr, x));//4