//alert("JavaScript works!");

// Michael Davis
// SDI 1403-02
// Project 1


/*
Barber Shop
*/

// Internal Storage
var namE      = "Eddie";
var job       = "barber";
var worksAt   = "the \"Davis Barber Shop\"";
var workDist  = "20 minutes away";
var workDays  = "Tuesday - Saturday";
var agesUp16  = 10;
var agesOlder = 20;
var work      = true;

//Outputs
console.log("Hi my name is " + namE + ".");
console.log("I am a professional " + job + ".");
console.log("I work at " + worksAt + ".");
console.log(namE + " lives " + workDist + " from his work place.");
console.log(namE + " usually works " + workDays + ".");
console.log("My prices for children up to ages 16 are " + agesUp16 + " dollars.");
console.log("My prices for ages 17 and older are " + agesOlder + " dollars.");
console.log("It's " + work + "I really love my job.");


var wakeup = true
var goWork = false


if (wakeup > goWork) {
    
    var whatDay = prompt("What day is it of the week?", " Choose a day between Tuesday-Saturday")
            console.log(whatDay + ", looks like I have to be at " + worksAt +  " by 11AM.");
    } else {
        
            console.log("I'm staying in the house today.");
        
    };
    

var customers;
    var customers = prompt("How old are you?", "ages"); 
            console.log(customers + "");

    if (namE || job ) {

        var heads = prompt("How many customers did Eddie have today under the ages of 16?");
            console.log(heads);
            heads = parseInt(heads);
            console.log(heads + "");
       
        if (agesUp16 < agesOlder) {
          
            var cuts = prompt("How many customers did Eddie have today older than 16?")    
            console.log("I made " + cuts * 20 + " dollars from customers older than 16.");
       
        } else {
            console.log("I didn't have any customers under the ages of 16.");
        }; 
   } else {
    
            console.log("I didnt have any customers over the age of 16.");
};

            console.log("Today was a great day at work!");
