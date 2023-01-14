/* merchAmount >= 100 (no charges)
merchAmount <= 50 (services charges Rs. 5)
merchAmount 51 to 99 (services charges Rs. 5 + 3% of Merchant Amount) */

function calcAmount(merchAmount)
{
    var totalAmount;
    if(merchAmount >= 100)
    {
        totalAmount = merchAmount //100 or Above 100
    }
    else if(merchAmount <= 50)
    {
        totalAmount = merchAmount + 5
    }
    else
    {
        totalAmount = merchAmount + 5 + (merchAmount/100 * 3)
    }
    return totalAmount
}
var finalAmount = calcAmount(99) //77.1
console.log(finalAmount)
