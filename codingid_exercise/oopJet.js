// Define Pilot class
class Pilot {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
}

// Define Jet subclass
class Jet {
  constructor(name, speed, altitude, price, historicalPilots) {
    this.name = name;
    this.speed = speed;
    this.altitude = altitude;
    this.price = price;
    this.historicalPilots = historicalPilots;
  }

  fly() {
    //complete the code
    const latestPilot = this.historicalPilots[this.historicalPilots.length - 1];
    console.log(
      `${this.name} is flying at ${this.speed} mph and ${this.altitude} feet with latest pilot ${latestPilot.name}, ${latestPilot.age} years old.`,
    );
  }

  increaseSpeed(amount) {
    //complete the code
    this.speed += amount;
  }

  decreaseSpeed(amount) {
    //complete the code
    this.speed -= amount;
  }

  increaseAltitude(amount) {
    //complete the code
    this.altitude += amount;
  }

  decreaseAltitude(amount) {
    //complete the code
    this.altitude -= amount;
  }
}

// Define JetArmy class
class JetArmy {
  constructor(name, location, budget) {
    this.name = name;
    this.location = location;
    this.budget = budget;
    this.jets = [];
  }

  addJet(jet) {
    //complete the code
    if (jet.price <= this.budget) {
      this.jets.push(jet);
      this.budget -= jet.price;
      console.log(
        `${this.name} Add new jet ${jet.name} with price ${jet.price}, current budget ${this.budget}`,
      );
    } else {
      console.log(
        `${this.name} do not have enought budget left to add ${jet.name} with price ${jet.price}`,
      );
    }
  }

  removeJet(jet) {
    //complete the code
    const index = this.jets.indexOf(jet);
    if (index > -1) {
      this.budget += jet.price;
      this.jets.splice(index, 1);
      console.log(
        `${this.name} Sell old jet ${jet.name} with price ${jet.price}, current budget ${this.budget}`,
      );
    }
  }

  getJetCount() {
    //complete the code
    return this.jets.length;
  }

  flyAllJets() {
    this.jets.forEach((jet) => {
      jet.fly();
    });
  }

  getInfo() {
    console.log('==========================================');
    //complete the code
    console.log(
      `${this.name}  located at ${this.location} have amount of budget${
        this.budget
      }\nHave ${this.getJetCount()} Jets with following detail:`,
    );
    this.flyAllJets();
  }
}

const myJetArmy = new JetArmy('My Jet Army', 'USA', 1000000);

const pilot1 = new Pilot('Chuck Yeager', 97, 'US Air Force, test pilot');
const pilot2 = new Pilot('Amelia Earhart', 39, 'Aviator, author');

const jet1 = new Jet('F-16', 1500, 30000, 200000, [pilot1, pilot2]);
const jet2 = new Jet('F-18', 1600, 35000, 250000, [pilot1]);

const jet3 = new Jet('F-19', 1600, 35000, 1000000, [pilot2]);

const jet4 = new Jet('F-20', 1000, 25000, 100000, [pilot2]);

jet1.decreaseAltitude(15000);
jet2.increaseSpeed(400);

myJetArmy.addJet(jet1);
myJetArmy.addJet(jet2);
myJetArmy.addJet(jet3);
myJetArmy.addJet(jet4);

myJetArmy.removeJet(jet4);

myJetArmy.getInfo();
