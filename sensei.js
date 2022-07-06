class Ninja {
    constructor(firstName, health) {
        this.firstName = firstName;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.firstName)
    }
    showStats() {
        console.log(this.firstName,this.health,this.speed,this.strength)
    }
    drinkSake() {
        console.log(this.health += 10);
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(firstName){
        super(firstName, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
