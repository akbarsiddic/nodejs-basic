class Employee {
  #name;
  #jobPosition;
  #salary;

  constructor(name, jobPosition, salary) {
    this.#name = name;
    this.#jobPosition = jobPosition;
    this.#salary = salary;
  }

  get getSalary() {
    return this.#salary;
  }
}

class Company {
  #name;
  #location;
  #companyCash;
  #arrEmployee;
  #month;

  constructor(name, location, companyCash) {
    this.#name = name;
    this.#location = location;
    this.#companyCash = companyCash;
    this.#arrEmployee = [];
    this.#month = 0;
  }

  set setArrEmployee(objEmployee) {
    this.#arrEmployee.push(objEmployee);
  }

  set setMonth(value) {
    this.#month = value;
    this.calculateCompanyCash(value);
  }
  getCompanyStatus() {
    //Complete code here
    console.log(
      `${this.#name} sudah berdiri selama ${this.#month} memiliki ${
        this.#arrEmployee.length
      } dengan Cash sebesar ${this.#companyCash}`,
    );
  }

  calculateCompanyCash(value) {
    //Complete code here
    this.#companyCash -=
      this.#arrEmployee.reduce((acc, curr) => acc + curr.getSalary, 0) * value;
  }

  addProject(objProject) {
    this.#companyCash += objProject.getPrice;
  }

  employeeResign(name) {
    //Complete code here
    let index = this.#arrEmployee.findIndex((employee) => employee === name);
    this.#arrEmployee.splice(index, 1);
  }
}

class Project {
  #name;
  #price;

  constructor(name, price) {
    this.#name = name;
    this.#price = price;
  }

  get getPrice() {
    return this.#price;
  }
}

let objCompany = new Company('PT Coding.ID', 'Tangerang', 100000000);

//print status perusahaan
objCompany.getCompanyStatus();

//Menambahkan 1 karyawan
let objEmployeeBadrun = new Employee('Badrun', 'Fullstack Developer', 5000000);
objCompany.setArrEmployee = objEmployeeBadrun;

//Bulan pertama perusahaan berjalan
objCompany.setMonth = 1;

//print status perusahaan
objCompany.getCompanyStatus();
