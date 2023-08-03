class Car {
  #name;
  #speed; //speed per lap
  #initialSpeed;
  constructor(name, speed) {
    this.#name = name;
    this.#speed = speed;
    this.#initialSpeed = speed;
  }

  get getName() {
    return this.#name;
  }

  get getSpeed() {
    return this.#speed;
  }
  increaseSpeed() {
    // increase speed by its first speed value
    this.#speed += this.#initialSpeed;
  }
}

class Race {
  #name;
  #arrCar;
  #length;

  constructor(name, length) {
    this.#name = name;
    this.#arrCar = [];
    this.#length = length;
  }

  addCar(objCar) {
    this.#arrCar.push(objCar);
  }

  startRace() {
    // print current speed
    // this.#arrCar.forEach((car) => {
    //   console.log(`${car.getName} speed: ${car.getSpeed}`);
    // });
    // let winner = null;
    // // using do while to make sure the loop is executed at least once
    // do {
    //   // increase speed
    //   this.#arrCar.forEach((car) => {
    //     car.increaseSpeed();
    //   });
    //   // print current speed
    //   this.#arrCar.forEach((car) => {
    //     console.log(`${car.getName} speed: ${car.getSpeed}`);
    //   });
    //   // check if any car has reached the finish line
    //   winner = this.#arrCar.find((car) => car.getSpeed >= this.#length);
    // } while (!winner);
    // console.log(`The winner is ${winner.getName}`);

    let winner = null;
    let loop = 1;

    while (!winner) {
      console.log(`Current Position for Loop ${loop}`);
      for (let i = 0; i < this.#arrCar.length; i++) {
        const car = this.#arrCar[i];
        console.log(`Current Position for ${car.getName} is ${car.getSpeed}`);
        if (car.getSpeed >= this.#length) {
          winner = car;
          break;
        }
        car.increaseSpeed();
      }
      loop++;
    }
    console.log(`The winner is ${winner.getName}`);
  }
}

let objRace = new Race('Mandalika', 100);

let car1 = new Car('car1', 10);
let car2 = new Car('car2', 20);
let car3 = new Car('car3', 14);

objRace.addCar(car1);
objRace.addCar(car2);
objRace.addCar(car3);

objRace.startRace();
