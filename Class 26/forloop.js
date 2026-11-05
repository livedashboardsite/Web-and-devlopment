// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

// for(let i in arr ){
//   console.log(i);
// }

// //print odd numbers
// for(let i in arr ){
//   if(i%2!=0){
//     console.log(i+" is odd");
//   }
// }

// //print even numbers
// for(let i in arr ){
//   if(i%2==0){
//     console.log(i+" is even");
//   }
// }

// //Find Prime Numbers
// for (let n of arr) {
//   let p = true;

//   if (n <= 1) {
//     p = false;
//   } else {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         p = false;
//         break; }
//     }
//   }

//   if (p) {
//     console.log(n + " is prime");
//   }
// }   

// //2d array
// let arr2 = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[0][0]);

// let obj = {
//   firstName: "Pratham",
//   lastName: "Thakur",
//   age: 17,
//   eyeColor: "black"
// }

// console.log(obj.lastName);


//Print right alinged Triangle of stars using for loop 
let n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }

    // stars
    for (let k = 1; k <= i; k++) {
        row += '*';
    }

    console.log(row);
}   



