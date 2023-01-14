// var myName = prompt(`Write your name?`).toLowerCase()
// var vowels = [`a`,`e`,`i`,`o`,`u`]
// var vowelsCount = 0
// var whiteSpace = ` `
// var whiteSpaceCount = 0
// var nums = [0,1,2,3,4,5,6,7,8,9]
// var numCount = 0
// var consonants = [`b`,`c`,`d`,`f`,`g`,`h`,`j`,`k`,`l`,`m`,`n`,`p`,`q`,`r`,`s`,`t`,`v`,`w`,`x`,`y`,`z`]
// var consonantsCount = 0

// for(var i=0;i<myName.length;i++)
// {
//     for(var j=0;j<vowels.length;j++)
//     {
//         if(myName[i]===vowels[j])
//         {
//             vowelsCount += 1
//         }
//     }
// }
// for(var k=0; k<myName.length;k++)
// {
//     if(myName[k]===` `)
//     {
//         whiteSpaceCount += 1
//     }
// }
// for(var l=0; l<myName.length;l++)
// {
//     for(var m=0; m<nums.length; m++)
//     {
//         if(myName[l]===nums[m].toString())
//         {
//             numCount += 1
//         }
//     }
// }
// for(var n=0;n<myName.length;n++)
// {
//     for(var p=0;p<consonants.length;p++)
//     {
//         if(myName[n]===consonants[p])
//         {
//             consonantsCount += 1
//         }
//     }
// }
// console.log(`Your name ${myName.toUpperCase()} has ${vowelsCount} Vowels, ${consonantsCount} Consonants, ${whiteSpaceCount} Spaces & ${numCount} Numbers.`)

//Use of indexOf()
var firstName = `abdul moiez`
var sentence = prompt(`Write your text here.`)
var firstNameFound = sentence.indexOf(firstName)//-1

if(firstNameFound!==-1)
{
    sentence = sentence.slice(0,firstNameFound)+`ammar khan`+sentence.slice(firstNameFound + firstName.length)
}
console.log(sentence)
//Assignment: Use prompt message `my name is abdul moiez abdul moiez and who are you. Then your program returns new sentence like `my name is ammar khan abdul moiez and who are you. So find the best code for this problem.





