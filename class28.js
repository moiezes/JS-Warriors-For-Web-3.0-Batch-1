// Callback Functions

// function a(abc)
// {
//     return abc + 2;
// }
// function b(num)
// {
//     return num() + 1;
// }
// a(7)

//Callback Function with Parameter
// function myDisplayer(some) {
//     console.log(some);
// }

// function myCalculator(num1, num2, displayFunc) {
//     let sum = num1 + num2;
//     displayFunc(sum);
// }
// myCalculator(7,7,myDisplayer); //14
  
//Recurrsion

//Actual Code (Without Recurrsion)
// function pow(num,exp) //pow(2,5)
// {
//     let result = 1;
//     for(let i=1;i <= exp; i++)
//     {
//         result = result * num;
//     }
//     return result;
// }
// console.log(pow(2,4));

// Code with Recurrsion

function power(num,exp)
{
    if(exp===1)
    {
        return num;
    }
    else
    {
    return num * power(num, exp-1);
    }
}
console.log(power(2,6)) //64





