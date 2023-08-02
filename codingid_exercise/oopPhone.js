class Smartphone {
  #merk;
  #amount;

  constructor(merk, amount) {
    this.#merk = merk;
    this.#amount = amount;
  }

  get getMerk() {
    return this.#merk;
  }
  get getAmount() {
    return this.#amount;
  }
}

class Store {
  #name;
  #arrPhone;

  constructor(name) {
    this.#name = name;
    this.#arrPhone = [];
  }

  addSmartphone(objSmartphone) {
    this.#arrPhone.push(objSmartphone);
  }

  getInfo() {
    console.log(
      `Toko ${this.#name} menjual ${this.#arrPhone.length} merk smartphone`,
    );

    for (let i = 0; i < this.#arrPhone.length; i++) {
      console.log(
        `${i + 1}. ${this.#arrPhone[i].getMerk} tersisa ${
          this.#arrPhone[i].getAmount
        } unit`,
      );
    }
  }
}

const tokoCodingID = new Store('CodingID');

const samsung = new Smartphone('Samsung', 10);
const iphone = new Smartphone('iPhone', 5);

tokoCodingID.addSmartphone(samsung);

tokoCodingID.addSmartphone(iphone);

tokoCodingID.getInfo();
