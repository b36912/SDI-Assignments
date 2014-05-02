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



//Verify Email address (true or false)
var emailReturn;

var checkeMail = function addres(email) {

    var emailLength = email.length;
   
    for (var i = 0; i < emailLength; i++) {
      
        if (email <= "school") {
            
            console.log("The email address is false.");
        
        } else {
            console.log("The email address is true.");
        }
    };
       
};      
emailReturn = checkeMail("mdavisii@fullsail.edu");


//Verify URL address (true or false)

var wSiteReturn;

var verifyWebS = function web(site) {

    var wSiteLength = site.length;
   
    for (var i = 0; i < wSiteLength; i++) {
      
        if (site < "web") {
            
            console.log("The URL address is false.");
        
        } else {
            console.log("The URL address is true.");
        }
    };
            
};
wSiteReturn = verifyWebS("www.fullsail.com");

