// Create class Fighter

export class Fighter{

    constructor(name, health, power){
        this.name = name
        this.health = health
        this.power = power
    }

    setDamage(damage){
        this.health -= damage 
        console.log(`${this.name}'s health : ${this.health}`)
    }

    hit(enemy, point){
        let damage = point * this.power
        enemy.setDamage(damage)        
    }

    knockout(){
        return new Promise (function(resolve, reject){

            setTimeout( () => {
                console.log('time is ower')
                resolve()
            }, 500 )

        })
    }
}


