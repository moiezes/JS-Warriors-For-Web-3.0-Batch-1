document.write("Welcome to Class 6 of JS")
var userAge = Number(prompt("What is your Age?"))
var gender = prompt("Are you male or female?").toLowerCase()

//    false          or      true
if(gender==="female" || userAge<18)//true
{
    console.log("You can Play")
}
else
{
    console.log("You cannot Play")
}