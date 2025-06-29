function countNegative(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <  0){   //for postive > with zero>=
            count++;
        }
    }
    return count;
}

console.log(countNegative([-1, -2, -3, 0, 1, 2, 3, -9, 8, -4, 5]));//5


function analyzeNumbers(arr) {
    let result = {
        positives: 0,
        negatives: 0,
        zeros: 0
    };

    for (let num of arr) {
        if (num > 0) {
            result.positives++;
        } else if (num < 0) {
            result.negatives++;
        } else {
            result.zeros++;
        }
    }

    return result;
}

const counts = analyzeNumbers([-1, -2, -3, 0, 1, 2, 3, -9, 8, -4, 5]);
console.log(counts);
// Output: { positives: 4, negatives: 5, zeros: 1 }
