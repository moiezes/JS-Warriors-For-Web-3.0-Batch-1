var classTitle = `This is JS Class 12th..`
document.write(`<h1 id='h11'>`,classTitle,`</h1>`)
var h1Tag = document.getElementById('h11')
h1Tag.style.backgroundColor = 'green'
h1Tag.style.fontFamily = 'cursive'
h1Tag.style.color = 'yellow'

//Strings
//Problem 1:
// You have solve a problem like you are alerting the user for the use of two consecutive space while writing the text.
// (We have done this in class 11)

//Problem 2:
//You are bounding the user that he can't use the word Timtimbabulation. If he use the said word, Javascript will replace the word with the text 'Disallowed word'.

//Solution:

// Let assume user will write in prompt: I am saying timtimbabulation
// var disallowedWord = `timtimbabulation`
// var txt = prompt('Write your text and dont use titimbabulation?') //string
// var len = txt.length //31

// for(i=0;i<len;i++) //i=30
// {   
//     if(txt===disallowedWord)
//     {
//         // txt = txt.slice(0,i)+"Disallowed word"+txt.slice(i+16)
//         console.log(`The condition is true`)
//     }
// }
// Your program will change the prompt text to: I am saying Disallowed word


var firstName = `moiez`
var sentence = prompt(`Write your text here.`)

var nameLen = firstName.length
var sentenceLen = sentence.length
var flag = false
for(var i=0; i<sentenceLen; i++)
{   
    if(sentence.slice(i,i+nameLen)===firstName)
    {
        sentence = sentence.slice(0,i) + "ammar" + sentence.slice(i+nameLen)
        flag = true
    }
}
if(!flag) //flag===false
{
    console.log(`You have not used the word Moiez`)
}
else
{
    console.log(sentence)
}

