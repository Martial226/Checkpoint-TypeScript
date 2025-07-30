// 1. Définition de l'interface Vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// 2. Implémentation de la classe Car
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Le moteur de la voiture a démarré");
  }
}

// 3. Création d'une instance et test
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.start();
