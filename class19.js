var theSum = addNumbers() //4 //Global

function addNumbers()
{
    var theSum = 2 + 2 //4 //Local
    return theSum
}
//No Better Work
var num1 = 50
function sum()
{
    console.log(num1 + 10)
}
sum()
//Use parameters and arguments instead of
function sum(num)
{
    console.log(num + 10)
}
sum(70)




