//strings

//Writing a program to check if user typed 2 consecutive spaces

var text = prompt("Enter the text") //abdul   moiez
var textLen = text.length

for(var i=0;i<textLen;i++)
{
    if(text.slice(i,i+2)==="  ")
    {
        console.log("You have used 2 spaces !")
    }
}









