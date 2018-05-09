import "babel-polyfill";
<<<<<<< HEAD
import { Fighter } from "./fighter.js";
import { ImprovedFighter } from "./improvedFighter.js";
=======
>>>>>>> fdceb5121951b51f45eb5be93bbc3f6a84a7bc33
import { fight } from "./fight.js";

// create two instances
fighter = new Fighter ('John' , 1000 , 3)
improvedFighter = new ImprovedFighter('Smith', 1000 ,2)

// create random points
points = Array.from({length: 25}, () => Math.floor(Math.random() * 40));
 
// call fight function
fight(fighter, improvedFighter, ...points)
