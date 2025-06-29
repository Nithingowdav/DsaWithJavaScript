function loopinLoop(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }
    return count;
}

console.log(loopinLoop(10)); //100


function loopiinLoop(n) {
    return n * n;
}

console.log(loopiinLoop(10)); // ➡️ 100


for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log("i=" + i + " j=" + j);
        }
    }

for (let i = 0; i < 3; i++) {
        for (let j = 0; j < i; j++) {
            console.log("i=" + i + " j=" + j);
        }
    }


let count = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("i=" + i + " j=" + j);
        count++;
    }
}
console.log(count); 
    
    

