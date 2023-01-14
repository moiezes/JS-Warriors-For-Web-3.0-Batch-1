//Function Expression
let sayColor = function(color){
    return `I am ${color}`;
}
//Arrow Functions
let calcWithPie = num => num + 3.14;
console.log(calcWithPie(3));

//Callback Function
let a = () => console.log(`123456789`);
//Another Function (Any)
let b = (sparrow) => sparrow();
b(a);
b(() => console.log(`I have written a full function in the argument of b function.`));






