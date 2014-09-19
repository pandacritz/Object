alert("JavaScript works!");


//alert("JavaScript works!");


//global variables
var currentSpeed;



// My Variables
var myCar = {
make: "Ford",
model: "Mustang",
year: 2013,
color: "Black",
topSpeed: 150,
currentSpeed: 55,
	




	
// My Functions	
	getSpeed: function(increase){
		
	   var speedUp = this.currentSpeed + increase;

	   
	   if (increase > this.speedUp){
	   ; }
	   else
	   {
		console.log("My " + myCar.make + "  " + myCar.model + "  current speed is " + speedUp + " miles per hour. Top speed is  " +  myCar.topSpeed + " miles per hour ");
           }
           
           for (i = 0; i < 1; i++){
           	console.log( "My " + myCar.make + " Driving down the street "+  speedUp ++  + " miles per hour ");
           }
       return speedUp;
      },
      
      
      
       
      decelerate: function(decrease){
      	
      	var slowDown = this.currentSpeed - decrease;
      	
      	if (slowDown <= 0 ){
      		;
      	} else{
      		console.log( "My " + myCar.make + "  " + myCar.model + " Need to slow down to park in the parking lot to make into lot  " + slowDown + ".");
      	}
        
        for (i = 0 ; i < 50; i++ ){
        	console.log( "My " + myCar.make + "  The spedometer goes down 1 mph each time i hit the breaks currently its at"+  slowDown--  + " mph ");
        }
        return slowDown;
       }
  
  };
  

	
	
	  






 myCar.getSpeed(40);
 console.log("Cruising down semoran."),
 currentSpeed = myCar.decelerate(5);
 console.log("You made it and stopped " );
