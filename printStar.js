// let n = 5;
// for(let i = 0; i < n; i++){
//     let str = "";
//     for(let j = 0; j < n; j++){
//         str += "*";
//     }
//     console.log(str); 
// }


let n = 5 ;
let string = "";
for (let i = 0; i < n; i++) { //Outer loop (i) runs 5 times → for each row
  for (let j = 0; j < n; j++) { //Inner loop (j) runs 5 times → for each column
    string += "*";
  }
  string += "\n"; //Adds a newline \n after every row 
}
console.log(string);//string = "*****\n*****\n*****\n*****\n*****\n"

 let raj = 5;
 for( let i = 0; i < raj; i++){
    let str = "";
    for( let j = 0; j < i; j++){ // 4 starts if j <= i or < (i+1) that time 5 row stars
        str += "*";
    }
    console.log(str);
 }
 
 
 //for(i=0; i<5; i++) or for(i=0; i<=4; i++) both are same
    

 
 let num = 5;
 for( let i = 0; i < num; i++){
    let str = "";
    for( let j = 0; j <= i; j++){
        str += j+1;
    }
    console.log(str);
 }
 
 for( let i = 0; i < num; i++){
    let row = "";
    for( let j = 0; j <= i; j++){
        row += i+1;
    }
    console.log(row);
 }
 
 //or //
 
 
 for( let i = 1; i <= num; i++){
    let row = "";
    for( let j = 1; j <= i; j++){
        row = row + i;
    }
    console.log(row);
 }