function largestArray(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let arr = [1, 2, 9, 4, 5];
result = largestArray(arr);
console.log(result);