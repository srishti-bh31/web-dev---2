// var a = 10;
// console.log(a);
// function demo(){
//     let b= 20;
//     console.log(b);
// }
// demo()
const car = {
    make: "Mahindra",
    model: "Thar"
};

// Object.seal(car);    // you can not add new value pair but can change the existing keys
// Object.freeze(car);  // you can not add or change keys 


car.model="XEV9E"
car.color = "Blue"; //This property addition is ignored.
console.log(car);