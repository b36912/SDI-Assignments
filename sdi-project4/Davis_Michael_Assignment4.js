/*
Michael Davis
SDI 1403-02
PROJECT 4
*/

console.log("-Strings");
//Verify telephone number (true or false)
var cellNumReturn;

var verifyTelNum = function (num) {

    var telLength = num.length;
   
    for (var i = 0; i < telLength; i++) {
      
        if (num > "cell") {
            
            console.log("The telephone number is true.");
            
        } else {
            console.log("The telephone number is false.");
        }
    };
           
};       
cellNumReturn = verifyTelNum("215-287-3163");

