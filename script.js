// the variable declaration and function declation will move to the top the scope
//hosting will applicable for var variable not for let and const
//
let a ="srishti"
console.log(a)
b = "revvv"
console.log(b)
// tdz when we declare the variabe with let and const without its proper initialisation then the varialble lies in temporal dead zone untill its proper initialisation
//take a array with lenth 10and keep 10 diff student marks in btw 0-40 and check wich student marks is paased and failed

let marks = [10,20,30, 4, 15, 25, 35, 12, 8, 18];
let passed = marks.filter((mark) => {
     if (mark >= 16) {
         console.log(mark, " is passed");
     } else {
         console.log(mark, " is failed");
     }
 });
//find the sum of all the elenments inside an array with for loop
 let av= [1,2,3,4,5,6,7,8,9,10];
 let sum = 0;
 for (let i = 0; i <av.length;i++){
     sum += av[i];
 }

 console.log("The sum of all the elements in the array is: ", sum);


// let num = [1,2,3,4,5];
// let sum = num.reduce((acc, val) => acc + val, 0);
// console.log("The sum of all the elements in the array is: ", sum);

// SOME AND EVERY METHOD
// some method will return true if any one of the element satisfy the condition otherwise false.
// every method will return true if all the elements satisfy the condition otherwise false.

// let numbers = [1,2,3,4,5,6,8,10];

// let isEven = numbers.some((num) => num % 2 === 0);
// console.log("Are all numbers even? ", isEven);

// let isOdd = numbers.every((num) => num % 2 !== 0);
// console.log("Are all numbers odd? ", isOdd);