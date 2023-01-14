//Date Object
var today = new Date() //object

var todayString = today.toString() //string
console.log(todayString.slice(4,15))

var days = [`Sun`,`Mon`,`Tue`,`Wed`,`Thur`,`Fri`,`Sat`]
console.log(days[today.getDay()]) //Sat
//Sun - 0
//Mon - 1
//Tue - 2
//Wed - 3
//Thur - 4
//Fri - 5
//Sat - 6
var month = [`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`]
console.log(month[today.getMonth()])
console.log(today.getDate()) //1-31

//getTime() gives milliseconds from Jan 01, 1970
console.log((((((today.getTime()/1000)/60)/60)/24)/30)/12)
//1000 ms -> 1 sec -> 60 sec -> 1 Min -> 60 mins -> 1 Hour





