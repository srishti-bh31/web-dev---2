let arr = ["apple", "banana","gauva"];
let a = []
while(arr.length > 0){
    let b = arr.pop();
    a.push(b);
}
console.log(a)

// ---------------------------------------------------------------------------

//let number = [10,3,-4,-8,29,-1]
//let positive = []
//while(number.length>0){
//    let num = number.pop();
//    if (num>=0){
//        positive.pop(num);
 //   }
//}
//console.log(positive)



//q- check if array is palindrome or not
function isPalindrome(){
let arr_2= [1,2,3,2,1];
let arr_3=[];
let arr_4=[...arr_2]; 
while (arr_2.length > 0) {
    let element = arr_2.pop();
    arr_3.push(element);
}
console.log(arr_3);
console.log(arr_4);

for (let i = 0; i < arr_4.length; i++) {
    if (arr_4[i] !== arr_3[i]) {
        return ("not palindrome");
    } else {
        return ("palindrome");
    } 
}

}

console.log(isPalindrome());



// ---------------------------------------------x---------------------------------------------x---------------------------------------------//


// Q- remove all duplicates element from a array
let arr_5 = [1, 2, 3, 2, 4, 1, 5, 3];
let Arr = [];
while (arr_5.length > 0) {
    let element = arr_5.pop();
    
}
// Q- split even and odd numbers from a given arrays
// Q- move all zeroes to the end of the array
