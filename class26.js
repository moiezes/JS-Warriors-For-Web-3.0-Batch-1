// Now we will use let keyword to make a variable.
// But Here is the simple difference between var, let and const.

var lastName = `Khan`;
lastName = `Khatri`;

var lastName = `No Name`;

console.log(lastName);

let middleName = `Akbar`;
middleName = `Mushtaq`;

let middleName = `Moiez`; // Redeclaration is not allowed by let

console.log(middleName);

const ourCity = `Karachi`;
ourCity = `Lahore`; // You cannot modify the constant variables.

console.log(ourCity);


