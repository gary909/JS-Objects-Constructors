//JS Object:
// const myCar = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1969
// };

//JS Constructor function
// function should be capitalised
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

//Then use the constructor to make a car
var mycar1 = new Car('Eagle', 'Talon TSi', 1993);

// console.log(myCar.year);
// console.log(myCar.model);
console.log(mycar1.year);
console.log(mycar1.model);