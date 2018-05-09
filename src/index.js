import "babel-polyfill";
import { Fighter } from "./fighter.js";
import { ImprovedFighter } from "./improvedFighter.js";
import { fight } from "./fight.js";

// create two instances
fighter = new Fighter ('John' , 1000 , 3)
improvedFighter = new ImprovedFighter('Smith', 1000 ,2)

// create random points
points = Array.from({length: 25}, () => Math.floor(Math.random() * 40));
 
// call fight function
fight(fighter, improvedFighter, ...points)
