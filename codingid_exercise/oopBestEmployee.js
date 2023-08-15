class Point {
    #reason
    #amount

    setPointDetail(reason, amount) {
        this.#reason = reason
        this.#amount = amount
    }

    get getReason() {
        return this.#reason
    }

    get getAmount() {  
        return this.#amount
    }
}

class Employee { 
    #name
    #arrPoint

    constructor(name) {
        this.#name = name
        this.#arrPoint = []
    }

    get getName() {
        return this.#name
    }

    addPoint(objPoint){
        this.#arrPoint.push(objPoint)
    }

    currentPoints() {
        // let total = 0
        // this.#arrPoint.forEach(element => {
        //     total += element.getAmount
        // });
        // return total

        // use for loop
        let total = 0
        for (let i = 0; i < this.#arrPoint.length; i++) {
            total += this.#arrPoint[i].getAmount
        }
        return total
    }

    printHistoryPoints() {
        console.log("History Points for " + this.#name)
        // this.#arrPoint.forEach(element => {
        //     console.log(element.getReason + ": " + element.getAmount)
        // });

        // use for loop
        // for (let i = 0; i < this.#arrPoint.length; i++) {
        //     console.log(this.#arrPoint[i].getReason + ": " + this.#arrPoint[i].getAmount)
        // }

        //  print if point is subtract
        for (let i = 0; i < this.#arrPoint.length; i++) {
            if (this.#arrPoint[i].getAmount < 0) {
                console.log("Substraction " + this.#arrPoint[i].getReason + ": " + this.#arrPoint[i].getAmount)
            }
            else{
                console.log(this.#arrPoint[i].getReason + ": " + this.#arrPoint[i].getAmount)
            }
        }

        // current points
        console.log("Current Points: " + this.currentPoints())
    }
}

class Division {
    #name
    #arrEmployee

    constructor(name) {
        this.#name = name
        this.#arrEmployee = []
    }

    get getName() {
        return this.#name
    }

    addEmployee(objEmployee) {
        this.#arrEmployee.push(objEmployee)
    }

    getBestEmployee() {
        // let bestEmployee = this.#arrEmployee[0]
        // this.#arrEmployee.forEach(element => {
        //     if (element.currentPoints() > bestEmployee.currentPoints()) {
        //         bestEmployee = element
        //     }
        // });
        // console.log("Best Employee for " + this.#name + " is " + bestEmployee.getName)

        // use for loop
        let bestEmployee = this.#arrEmployee[0]
        for (let i = 0; i < this.#arrEmployee.length; i++) {
            if (this.#arrEmployee[i].currentPoints() > bestEmployee.currentPoints()) {
                bestEmployee = this.#arrEmployee[i]
            }
        }
        console.log("Best Employee for " + this.#name + " is " + bestEmployee.getName)

    }
}

let empBadrun = new Employee("Badrun")
let empSusi = new Employee("Susi")
let empMakmur = new Employee("Makmur")

let divProject = new Division("Project")
let divFinance = new Division("Finance")

let pointPlusProject = new Point()
pointPlusProject.setPointDetail("Project OnTime", 100)
empBadrun.addPoint(pointPlusProject)
empMakmur.addPoint(pointPlusProject)

let pointPlusTarget = new Point()
pointPlusTarget.setPointDetail("Target Q1 Achieved", 50)
empSusi.addPoint(pointPlusTarget)

let pointPlusInovation = new Point()
pointPlusInovation.setPointDetail("Innovation for Team", 25)
empBadrun.addPoint(pointPlusInovation)
empSusi.addPoint(pointPlusInovation)

let pointMinusMistakes = new Point()
pointMinusMistakes.setPointDetail("Mistakes from team", -10)
empSusi.addPoint(pointMinusMistakes)
empMakmur.addPoint(pointMinusMistakes)

empBadrun.printHistoryPoints()
console.log("==============================")
empMakmur.printHistoryPoints()
console.log("==============================")
empSusi.printHistoryPoints()
console.log("==============================")

divProject.addEmployee(empBadrun)
divProject.addEmployee(empMakmur)
divFinance.addEmployee(empSusi)

divProject.getBestEmployee()
divFinance.getBestEmployee()