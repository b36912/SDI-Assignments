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


// Capitalize the 1st letter of the words
// Returns First letter capitalized 
//Project 2 & 3
var splitReturn;

var splitUpper = function (capitalize) {
    
    var split = capitalize.split(" ");
    var result = "";
        for (var i = 0, first = split.length; i < first; i++) {
            
            var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
            
                result = result.concat(spNew + " ");
        };
        return result;
};
splitReturn = console.log(splitUpper("michael is doing homework right now."));
              

// Changes the separator to a new separator 
//Project 2 & 3
var swapSeparator = function (oldSep,newSep) {
    var swapSep = ("a,b,c","/");
        
        return oldSep.replace(oldSep,newSep);
    };
console.log(swapSeparator("a,b,c","a/b/c"));
console.log(" ");

