//document.write('Welcome to JavaScript Class 8')
// Array Methods => Push, Unshift, Pop, Shift, Splice
var colors = [] // Array

var button_1 = document.getElementById("myBtn_1")
var button_2 = document.getElementById("myBtn_2")
var button_3 = document.getElementById("myBtn_3")
var button_4 = document.getElementById("myBtn_4")

//Add in start
button_1.addEventListener('click',function() {
    var textBox1 = document.getElementById("userColor").value;
    colors.unshift(textBox1) //Add elements in start of an Array
    console.clear()
    console.log(colors)
})
button_2.addEventListener('click',function() {
    var textBox2 = document.getElementById("userColor").value;
    colors.push(textBox2)
    console.log(colors)
})
button_3.addEventListener('click',function() {
    colors.shift()
    console.log(colors)
})
button_4.addEventListener('click',function() {
    colors.pop()
    console.log(colors)
})

// Splice

//              0       1       2       3
// var colors = ['brown','red','purple','orange']

// console.log(colors)
// console.log(colors[2]) //purple

// colors.splice(2,1,'yellow','white') // Both Remove & Add Elements in array

// // [0'brown', 1'red']

// console.log(colors)
// console.log(colors[1]) //red

// Assignment
// Make a vey basic and simple textbox(es) with button(s) to add and remove elements from array but in JavaScript use only Splice Method.
// Deadline: Saturday 26 Nov, 2022 (06 pm)

