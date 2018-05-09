// create async function fight

async function fight(fighter, improvedFighter , ...points){

    for ( index in  points ) {

        if (index % 2 == 0){
            improvedFighter.doubleHit(fighter , points[index])
        }
        else {
            fighter.hit(improvedFighter,  points[index])
        }

        if (fighter.health < 0){
            await fighter.knockout()
            console.log (`${fighter.name} is dead`)
            break
        }

        if (improvedFighter.health < 0) {
            await improvedFighter.knockout()
            console.log (`${improvedFighter.name} is dead`)
            break
        }

    }
}