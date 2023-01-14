// //              0           1       2           3           4           5           6
// var cities = ['karachi','lahore','islamabad','peshawar','gujran wala','Mirpur','Shikarpur'] //Strings

// //template literal

// var cityName = prompt("Write your City?")

// var isMatched = false // Boolean => true / false (Flag Variable)

// for(var i=0;i<cities.length;i++)
// {
//     if(cityName.toLowerCase()===cities[i].toLowerCase())
//     {
//         console.log(`Your city ${cityName.toUpperCase()} is meet with our criteria thats why you are selected.`)
//         isMatched = true
//         break
//     }
// }
// if(!isMatched) //if false
// {
//     console.log(`Sorry ! You are not selected..`)
// }

var firstName = ['abdul', 'mohammad', 'Syed']
var lastName = ['sufiyan', 'rehmat', 'moiez', 'okasha']
var fullName = []

for(var i=0;i<firstName.length;i++)
{
    for(var j=0;j<lastName.length;j++)
    {
        fullName.push(firstName[i]+" "+lastName[j])
    }
}
for(var k=0;k<lastName.length;k++)
{
    for(var l=0;l<firstName.length;l++)
    {
        fullName.push(lastName[k]+" "+firstName[l])
    }
}
console.log(fullName)



