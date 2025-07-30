"use strict";
// 2. Implémentation de la classe Car
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Le moteur de la voiture a démarré");
    }
}
// 3. Création d'une instance et test
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.start();
