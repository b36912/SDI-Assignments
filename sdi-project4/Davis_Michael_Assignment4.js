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
        

//I used parse to turn it from  string to a number
var Number = function (num) {
    console.log(num);
};
Number("5");

var number = parseInt("10");
console.log(parseInt(number));
console.log(" ");


console.log("-Arrays")
// Smallest value in array 
// Project 3
var SvalueNumArray = function (array,num) {
        
        array.sort(function(smal,lest){return smal-lest;});
        if (num >= array[0] && num < array[array.length-1]) {
                array.push(num);
                array.sort(function(smal,lest){return smal-lest;});
                var result = array[array.lastIndexOf(num) + 1];
                return result;
        } else {
                return null;
        };
};
var numberList = [0,1,3,5,100,134,187900];
console.log(SvalueNumArray(numberList,0));
// Largest value in array project 3
// null if false
var LvalueNumArray = function (array,num) {
        array.sort(function(smal,lest){return smal-lest;});
        if (num > array[0] && num <= array[array.length-1]) {
                array.push(num);
                array.sort(function(smal,lest){return smal-lest;});
                var result = array[array.indexOf(num) - 1];
                return result;
        } else {
                return null;
        };
};
console.log(LvalueNumArray(numberList,5));



// Add up and total only numbers
// Project 3
var ValueNumArray = function (array) {
    var total = 0;
    for (var i = 0, j = array.length; i < j; i++) {
            if (array[i] / 1 === array[i]) {
                    total += array[i];
            };
    };
    return total;
};
var randomList = [4,"iPhone","macbook", 200,"27", "babygirl", 2014, 87];
console.log(ValueNumArray(randomList));



// Finds duplicate items in array Project 3
var arrayItems = [{a:6},{a:1},{a:8},{a:2},{a:3},{a:5},{a:4},{a:7},{a:9}];
var arrayList = ["Mike", "football", 300, 2700, 2700, "crazy",2700,"fly", "fly"];
var duplicateArray = function (findItem,array) {
    var holdIndex = [], index;
    for (var i = 0, dup = array.length; i < dup; i++) {
            if (array[i] === findItem) {
                    index = array.indexOf(array[i],i);
                    holdIndex.push(index);
            };
    };
    return holdIndex;
};


console.log(arrayItems,"a");
console.log(duplicateArray(2700,arrayList));
