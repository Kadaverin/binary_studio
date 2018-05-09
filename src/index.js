import "babel-polyfill";

// create two instances
fighter = new Fighter ('John' , 100 , 3)
improvedFighter = new ImprovedFighter('Smith', 100 ,2)

// create random points
 points = Array.from({length: 25}, () => Math.floor(Math.random() * 40));
 
 // call fight function
 fight(fighter, improvedFighter, ...points)
