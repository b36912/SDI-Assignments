//alert("JavaScript works!");

// Michael Davis
// SDI 1403-02
// Project 3


/*
Barber Shop
*/

//JSON
var haircut = {
	
    "styles":[
                  
        {
            "customer" : "Mike",
            "style"    : "Fade",
            "cost"     :  20
            
	},
        {
            "customer" : "Chris",
            "style"    : "Shape Up",
            "cost"     :  10
        },
        {
            "customer" : "Andrew",
            "style"    : "Ceaser",
            "cost"     :  15
        },
        {
            "customer" : "Tom",
            "style"    : "Baldy",
            "cost"     :  20
        }
    ]
};

// Internal Storage
var namE      = "Eddie";
var job       = "barber";
var worksAt   = "the \"Davis Barber Shop\"";
var workDist  = "20 minutes away";
var workDays  = "Tuesday - Saturday";
var agesUp16  = 10;
var agesOlder = 20;

//json

var wakeup = true
var goWork = false


if (wakeup > goWork) {
    
    var whatDay = prompt("What day is it of the week?", " Choose a day between Tuesday-Saturday")
            console.log(whatDay + ", looks like I have to be at " + worksAt +  " by 11AM.");
    } else {
        
            console.log("I'm staying in the house today.");
        
    };




//Traffic
var accident = ["car", "truck"];
var laneOpen = 1;
var minLate  = 15;
var traffic;
var traffic  = function(accident) {

    while (laneOpen > minLate) {     
        if (accident[0].length || accident[1].length) {
             
            console.log("There's only " + laneOpen + " lane open on the highway!");
            
         }else{
            console.log("There was a " + accident + " that was the cause of traffic, I'm glad they towed them quick!");
         }
    }
};


//Haircuts
var hairStyle = ["Fade", "Ceaser", "Hightop Fade", "Shape up"];
var shaveFace = true;
var question  = "How would you like your haircut?";
var greet     = "Welcome to ";
var youCan    = "You can choose from a ";
var hairCuts;
var hairCuts  = function (haircut) {
    
            console.log(greet + worksAt);
            console.log(question);
            for (var styles in haircut.styles) {
                
                
                console.log("The customer " + haircut.styles[styles].customer) 
            }
            for (var i = 0; i < hairStyle.length; i++){
            
            console.log(youCan + hairStyle[i] + ".");
            };
   // statements
};


//Total Profit....for loop nested
var olderCusts   =  20;
var youngerCusts =  10;
var countTime;
var toPro = function(totalprofit) {
    for (var styles in haircut.styles) {
    
    console.log("The haircut cost " + haircut.styles[styles].cost);
    
    }
    for (var countTime = 0; countTime < 1; countTime ++) {
            
            console.log("I made " + (olderCusts * 10) + " dollars from older customers .") ;
            console.log("I made " + (youngerCusts * 5) + " dollars from younger customers .") ;
    }
};


//Main Code
    traffic();   
    hairCuts(haircut);
    toPro();
    console.log("Today I had a busy day!");
