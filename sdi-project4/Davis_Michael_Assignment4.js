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


console.log("-Numbers");

//numbers math function
var productCost = 11.00;
var grandCost = 11.75 * 2.00;
var cost = function(pay) {
    if(11+2) {
            console.log ("$" + pay.toFixed(2));
    }
};
cost(grandCost);


//comparisons and operators, this is also for assignment 2
var fuzzyNumber = function (num,comNumber,percent) {
    var percentage = (num / comNumber) * 100;
    if ((num >= comNumber && percentage >= percent) || (num > comNumber && percentage > percent)) {
        return false;
} else {
        return true;
};
};
console.log(fuzzyNumber(1,27,54));
console.log(fuzzyNumber(54,1,27));

        

// 2 dates 
// Output [Days,Hours,Minutes,Seconds] 
//Project 2
var timeBtwDatesReturn;

var timeBtwDates = function (date1,date2) {
    var dates = [7,24,60,1000];
    var difference = (date1 > date2) ? date1.getTime() - date2.getTime() : date1.getTime() - date2.getTime();
        dates[0] = dates[1] / 24;
        dates[1] = dates[2] / 60;
        dates[2] = dates[3] / 60;
        dates[3] = difference / 1000;
        return dates;
};
var date1 = new Date(2014,4,26);
var date2 = new Date(2014,4,19);
var timeConversion = timeBtwDates(date1,date2);
        console.log("Days difference : " + timeConversion[0] + ", hours are : " + timeConversion[1]);
        

