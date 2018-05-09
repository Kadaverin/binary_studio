// Create class ImprovedFighter

class ImprovedFighter extends Fighter{
    
    constructor(name, health, power){
        super(name, health, power)
    }

    doubleHit(enemy, point){
        let damage = 2 * point * this.power
        enemy.setDamage( damage )
    }

}
