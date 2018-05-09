// Create class Fighter

export class Fighter{

    constructor(name, health, power){
        this.name = name
        this.health = health
        this.power = power
    }

    setDamage(demage){
        console.log( this.health -= demage )
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


