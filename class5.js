//If Statements

var prizeBalance = 8600 // + 1000
console.log('Your prize balance is ' + prizeBalance)

var prize = 1000 //number
var penalty = 500

    
// if(prizeBalance != 8600)
// {
//     console.log("Poor")
// }
// else
// {
//     console.log("Good")
// }

var userAnswer = prompt("Who is the president of Pakistan?")

if(userAnswer==="Dr. Arif Alvi")//Title Case
{
    console.log('Congrates ! You Win')
    prizeBalance += prize
    console.log('Now your Award raised upto ' + prizeBalance) //9600
}
else if(userAnswer==="dr. arif alvi") //Lower Case
{
    console.log('Congrates ! You Win')
    prizeBalance += prize
    console.log('Now your Award raised upto ' + prizeBalance) //9600
}
else if(userAnswer==="DR. ARIF ALVI") //Upper Case
{
    console.log('Congrates ! You Win')
    prizeBalance += prize
    console.log('Now your Award raised upto ' + prizeBalance) //9600
}
else if(userAnswer==="Dr.Arif Alvi")
{
    console.log('Congrates ! You Win')
    prizeBalance += prize
    console.log('Now your Award raised upto ' + prizeBalance) //9600
}
else
{
    console.log('Oops.. You Lose')
    prizeBalance -= penalty
    console.log('Your awarded amount has be degrade by 500 and your current award is ' + prizeBalance) //8100
}
